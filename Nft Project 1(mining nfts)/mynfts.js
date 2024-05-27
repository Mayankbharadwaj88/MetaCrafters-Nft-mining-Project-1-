/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
var mynfts = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (Tagline,eyecolor,Clothestype,bling,TokenId) {
 var myMetadata = {
    "name":Tagline,
    "eyecolor":eyecolor,
    "Clothestype":Clothestype,
    "bling":bling,
    TokenId:TokenId   
    
 }
 mynfts.push(myMetadata)
 console.log("Name Of minted Nft : " + Tagline)
 console.log("");
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
for (var i = 0; i < mynfts.length; i++) {
    console.log(" Name        :"+mynfts[i].name)
    console.log(" EyeColor    :"+mynfts[i].eyecolor)
    console.log(" ClothesType :"+mynfts[i].Clothestype)
    console.log(" bling       :"+mynfts[i].bling)
    console.log(" TokenId     :"+mynfts[i].TokenId)
    console.log("");
}
}
// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log(mynfts.length)
}

// call your functions below this line
mintNFT("Gojo","Blue","white Shirt","sun glasses",34);
mintNFT("Tanjiro","Red","green jacket","Hat",35);
mintNFT("Goku","Black","Martial art Uniform","beanie",36);
mintNFT("kazuma","brown","blue Jacket","golden Chain",37);
listNFTs();