pragma solidity >=0.4.21 <0.7.0;

interface IWeth {
    function deposit() external payable;
    function withdraw(uint wad) external;
    function balanceOf(address owner) external view returns(uint);
}
