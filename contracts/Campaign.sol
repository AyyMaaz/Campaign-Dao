// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

contract CampaignFactory {

    address [] public deployedCampaigns;
    event campaignCreated(
    string title ,
    uint requiredAmount ,
    address indexed owner ,
    address campaignAddress ,
    string imgURI ,
    uint indexed timestamp ,
    string indexed category);

    function createCampaign (
   
        string memory campaignTitle ,
        uint requiredCampaignAmount ,
        string memory imgURI ,
        string memory storyURI,
          string memory category ) 
        public{
        Campaign newCampaign = new Campaign (campaignTitle , requiredCampaignAmount , imgURI , storyURI ) ;
        deployedCampaigns.push(address(newCampaign)) ;
        
        emit campaignCreated(
             campaignTitle ,
             requiredCampaignAmount ,
             msg.sender ,
             address ( newCampaign ) ,
             imgURI ,
             block.timestamp,
             category
        );
   }
}

contract Campaign {

string public title ;
uint public requiredAmount ;
string public image ;
string public story ;
address payable public owner ;
uint public receivedAmount ;
   event donated ( address to , uint amount , uint time ) ;

  constructor (
    string memory campaignTitle ,
    uint requiredCampaignAmount ,
    string memory imgURI ,
    string memory storyURI) {
        
    
    title= campaignTitle ;
    requiredAmount= requiredCampaignAmount ;
    image=imgURI ;
    owner = payable(msg.sender );
    story= storyURI ;

}

function donate( )public payable {
    require(requiredAmount > receivedAmount , " required amount fullfilled " ) ;
    owner.transfer( msg.value ) ;
    receivedAmount+= msg.value ;
    emit donated(msg.sender , msg.value , block.timestamp ) ;
}
}