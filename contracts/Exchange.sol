// SPDX-License-Identifier: UNLICENSE
pragma solidity ^0.8.0;

import "./Token.sol";

contract Exchange {

    struct _Order {
        // Attribute of an order
        uint id; // Unique identifier fro order
        address user; // USer who made order
        address tokenGet; // Contract address of the token the user gets
        uint amountGet; // Amount the user gets
        address tokenGive; // Contract address of the token the user gives away
        uint amountGive; // Amount the user was created
        uint timestamp; // When the oder was created
    }

    address public feeAccount;
    uint public feePercent;
    uint public orderCount;

    mapping(address => mapping(address => uint)) public tokens;
    mapping(uint => _Order) public orders;
    mapping(uint => bool) public orderCancelled;

    event Deposit(
        address _token,
        address _user,
        uint _amount,
        uint _balance
    );

    event Withdraw(
        address _token,
        address _user,
        uint _amount,
        uint _balance
    );
    
    event Order(
        uint _id,
        address _user,
        address _tokenGet,
        uint _amountGet,
        address _tokenGive,
        uint _amountGive,
        uint _timestamp
    );

    event Cancel(
        uint _id,
        address _user,
        address _tokenGet,
        uint _amountGet,
        address _tokenGive,
        uint _amountGive,
        uint _timestamp
    );

    constructor(address _feeAccount, uint _feePercent) {
        feeAccount = _feeAccount;
        feePercent = _feePercent;
    }

    function depositToken(address _token, uint _amount) public {
        Token(_token).transferFrom(msg.sender, address(this), _amount);
        tokens[_token][msg.sender] = tokens[_token][msg.sender] + _amount;

        emit Deposit(_token, msg.sender, _amount, balanceOf(_token, msg.sender));
    }

    function withdrawToken(address _token, uint _amount) public {
        Token(_token).transfer(msg.sender, _amount);
        tokens[_token][msg.sender] = tokens[_token][msg.sender] - _amount;

        emit Withdraw(_token, msg.sender, _amount, balanceOf(_token, msg.sender));
    }

    function balanceOf(address _token, address _user) public view returns (uint) {
        return tokens[_token][_user];
    }

    function makeOrder(address _tokenGet, uint _amountGet, address _tokenGive, uint _amountGive) public {
        
        require(
            balanceOf(_tokenGive, msg.sender) >= _amountGive,
            "Insufficient balance"
        );
        
        orderCount = orderCount + 1;

        orders[orderCount] = _Order(
            orderCount,
            msg.sender,
            _tokenGet,
            _amountGet,
            _tokenGive,
            _amountGive,
            block.timestamp
        );

        emit Order(
            orderCount,
            msg.sender,
            _tokenGet,
            _amountGet,
            _tokenGive,
            _amountGive,
            block.timestamp
        );
    }

    function cancelOrder(uint _id) public {
        // Fetch order
        _Order memory _order = orders[_id];

        // Order must exist
        require(
            _order.id == _id,
            "Invalid order id"
        );

        // Ensure the caller of the function is the owner of the order
        require(
            _order.user == msg.sender,
            "You're not authorized to cancel this order"
        );

        orderCancelled[_id] = true;

        emit Cancel(
            _order.id,
            msg.sender,
            _order.tokenGet,
            _order.amountGet,
            _order.tokenGive,
            _order.amountGive,
            block.timestamp
        );
    }
}