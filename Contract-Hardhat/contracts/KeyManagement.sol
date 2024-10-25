// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract KeyManagement {
    struct PublicKey {
        address owner;
        string key;
        bool revoked;
    }

    mapping(address => PublicKey) public publicKeys;

    event KeyGenerated(address indexed owner, string key);
    event KeyRevoked(address indexed owner);

    function generateKey(string memory key) public {
        require(
            bytes(publicKeys[msg.sender].key).length == 0,
            "Key already exists for this address."
        );

        publicKeys[msg.sender] = PublicKey(msg.sender, key, false);
        emit KeyGenerated(msg.sender, key);
    }

    function revokeKey() public {
        require(
            bytes(publicKeys[msg.sender].key).length != 0,
            "No key exists for this address."
        );
        require(!publicKeys[msg.sender].revoked, "Key already revoked.");

        publicKeys[msg.sender].revoked = true;
        emit KeyRevoked(msg.sender);
    }

    function getKey(address owner) public view returns (string memory) {
        require(
            bytes(publicKeys[owner].key).length != 0,
            "No key exists for this address."
        );
        require(!publicKeys[owner].revoked, "Key has been revoked.");

        return publicKeys[owner].key;
    }
}
