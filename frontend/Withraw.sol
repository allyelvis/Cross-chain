function withdraw(uint256 amount) public {
    require(balanceOf(msg.sender) >= amount, "Insufficient balance");
    _burn(msg.sender, amount);
    emit WithdrawInitiated(msg.sender, amount);
}
