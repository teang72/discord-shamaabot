module.exports = {
	name: '!catfacts',
	description: 'catfacts!',
	execute(msg, args) {


	
	msg.reply(getCatFact());
        //msg.channel.send('Got here');
	},
};

const getCatFact = () => {
	// Pick a random number
	var len = catFactslist.length;
	var rando = Math.floor(Math.random() * len);
	//console.log('got to CatFact',rando, catFactslist[rando]);
	return catFactslist[rando];

}




var catFactslist = [
"Ginger tabby cats can have freckles around their mouths and on their eyelids!"
,"A cat has the power to sometimes heal themselves by purring."
,"Cats only use their meows to talk to humans, not each other."
,"The average cat can jump 8 feet in a single bound–nearly six times its body length!"
,"Cats only sweat through their paws and nowhere else on their body."
,"A group of cats is called a clowder."
,"A cat only has the ability to move their jaw up and down, not side to side like a human can."
,"A female cat can be referred to as a molly or a queen, and a male cat is often labeled as a tom."
,"70% of your cat’s life is spent asleep."
,"A cat’s nose is as unique as a human’s fingerprint."
,"Cats have 3 eyelids."
,"In Ancient Egypt, when a person’s house cat passed away, the owner would shave their eyebrows to reflect their grief."
,"Unlike humans, cats are usually lefties. Studies indicate that their left paw is typically their dominant paw."
,"Kittens in the same litter can have different fathers."
,"A GROUP OF KITTENS IS A KINDLE"
,"Abraham Lincoln was a huge fan of cats"
,"'ailurophile' is a fancy word for \"cat lover\""
];

//console.log(getCatFact());

