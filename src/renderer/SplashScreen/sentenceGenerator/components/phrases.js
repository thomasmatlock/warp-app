const phrases = [
    'small, medium, large',
    'none of your business',
    'for reasons unknown',
    'will come in useful',
    'what if?',
    'why not?',
    // AMERICAN
    // 'a bigger bang for your buck',
    // 'a dog is a man\'s best friend',
    // 'a foot in the door',
    // 'a good man is hard to find',
    // 'a hard man is good to find',
    // 'a house is not a home',
    // 'a miss is as good as a mile',
    // 'a no-brainer',
    'a picture is worth a thousand words',
    'a piece of cake',
    // 'a piece of the action',
    // 'a rising tide lifts all boats',
    // 'a rose is a rose is a rose',
    // 'a shot in the arm',
    // 'a sledgehammer to crack a nut',
    // 'above my pay grade',
    // 'absent-minded professor',
    // 'ace in the hole',
    // 'acid test - the',
    // 'action man',
    // 'across the pond',
    // 'air kiss',
    // 'air quotes',
    // 'all hat and no cattle',
    // 'all publicity is good publicity',
    // 'all singing, all dancing',
    // 'all systems go',
    // 'all you can eat',
    // 'an accident waiting to happen',
    // 'an arm and a leg',
    // 'an axe to grind',
    // 'an offer he can\'t refuse',
    // 'another day, another dollar',
    // 'as easy as pie',
    // 'as easy as taking candy from a baby',
    // 'as happy as a clam',
    // 'attack is the best form of defence',
    // 'away with the fairies',
    // 'baby blues',
    // 'baby boomer',
    // 'back to the drawing board',
    // 'back-seat driver - a',
    // 'bad hair day - a',
    'bada-bing',
    // 'balling the jack',
    // 'ballpark figure - a',
    // 'barking up the wrong tree',
    // 'basket case',
    // 'bass-ackwards',
    // 'bats in the belfry',
    // 'be afraid, be very afraid',
    // 'bean counter',
    // 'bee\'s knees - the',
    // 'beef and reef',
    // 'behind the eight ball',
    // 'bells and whistles',
    // 'bet your bottom dollar',
    // 'between a rock and a hard place',
    // 'big apple',
    // 'big cheese',
    // 'big easy',
    // 'big fish in a small pond',
    // 'bigger bang for your buck - a',
    // 'birds and the bees - the',
    // 'bish-bash-bosh',
    // 'bish-bosh',
    // 'bite the dust',
    // 'black-on-black',
    // 'blast from the past - a',
    // 'blaze a trail',
    // 'blonde bombshell',
    // 'blow your mind',
    // 'blue-plate special',
    // 'bodice ripper',
    // 'body surfing',
    // 'boogie-woogie',
    // 'born again',
    // 'born with a silver spoon in one\'s mouth',
    // 'bought the farm',
    // 'break a leg',
    // 'bronx cheer',
    // 'brownie points',
    // 'bucket list',
    // 'bunny boiler - a',
    // 'bury the hatchet',
    // 'caesar salad',
    // 'carbon-copy',
    // 'card-sharp - a',
    // 'catch 22',
    // 'chaise lounge',
    // 'channel surfing',
    // 'charley horse',
    // 'charm offensive',
    // 'chick flick - a',
    // 'chow down',
    // 'clear blue water',
    // 'cliff-hanger',
    // 'climb on the bandwagon',
    // 'close, but no cigar',
    // 'cloud nine',
    // 'club sandwich',
    // 'coin a phrase',
    // 'cold enough to freeze the balls off a brass monkey',
    // 'come on down',
    // 'compassion fatigue',
    // 'cold turkey',
    // 'concrete overcoat',
    // 'cost an arm and a leg',
    // 'cotton-picking',
    // 'customer is always right - the',
    // 'cut to the chase',
    // 'cute as a bug\'s ear',
    // 'date rape',
    // 'dead ringer - a',
    // 'designer stubble',
    // 'diamond is forever',
    // 'differently abled',
    // 'dirt bag',
    // 'dollars to doughnuts',
    // 'doom and gloom',
    // 'don\'t call us, we\'ll call you',
    // 'don\'t get mad, get even',
    // 'double whammy',
    // 'down the pan',
    // 'down the tubes',
    // 'down to the wire',
    // 'drag race',
    // 'driving while black',
    // 'drop-dead gorgeous',
    // 'dumb blonde',
    // 'ear candy',
    // 'easy as pie',
    // 'easy-peasy',
    // 'eighty six',
    // 'elephant in the room',
    // 'elvis has left the building',
    // 'ethnic cleansing',
    // 'excuse me while i kiss this guy',
    // 'extraordinary rendition',
    // 'face the music',
    // 'failing to plan is planning to fail',
    // 'fall guy',
    // 'famous for fifteen minutes',
    // 'fancy pants',
    // 'fashion victim - a',
    // 'feeding frenzy - a',
    // 'fifteen minutes of fame',
    // 'fifth column',
    // 'filthy rich',
    // 'finger lickin\' good',
    // 'fish or cut bait',
    // 'five o\'clock shadow',
    // 'flavor of the month - the',
    // 'fly by the seat of one\'s pants',
    // 'fly off the handle',
    // 'fly on the wall',
    // 'foot in the door - a',
    // 'for the birds',
    // 'from sea to shining sea',
    // 'fuddy-duddy - a',
    // 'full of **** and vinegar',
    // 'funny farm - the',
    // 'generation x',
    // 'genius is one percent inspiration and 99 percent perspiration',
    // 'get down to brass tacks',
    // 'get medieval',
    // 'get your dander up',
    // 'get your goat',
    // 'gild the lily',
    // 'glass ceiling',
    // 'go haywire',
    // 'go the whole hog',
    // 'go postal',
    // 'go pound sand',
    // 'go to hell in a handbasket',
    // 'go to the mattresses',
    // 'godfrey daniel',
    // 'good riddance to bad rubbish',
    // 'goody, goody gumdrops',
    // 'gordon bennett',
    // 'got my mojo working',
    // 'granny dumping',
    // 'great balls of fire',
    // 'gridlock',
    // 'gung ho',
    // 'hairy eyeball',
    // 'happy as a clam',
    // 'hard man is good to find',
    // 'hasta la vista, baby',
    // 'have an axe to grind',
    // 'heads up',
    // 'heard it through the grapevine',
    // 'heavens to betsy',
    // 'heavens to murgatroyd',
    // 'heavy metal',
    // 'heebie-jeebies - the',
    // 'hell in a handbasket',
    // 'hell\'s half acre',
    // 'high five',
    // 'high on the hog',
    // 'high, wide and handsome',
    // 'hissy fit',
    // 'hold your horses',
    // 'home is where the heart is',
    // 'hooray henry',
    // 'horse feathers',
    // 'hot off the press',
    // 'houston, we have a problem',
    // 'hunky-dory',
    // 'hunt and peck',
    // 'hush puppies',
    // 'i have nothing to declare but my genius',
    // 'identity theft',
    // 'if you can\'t stand the heat, get out of the kitchen',
    // 'in an interesting condition',
    // 'in like flynn',
    // 'in spades',
    // 'in the bag',
    // 'in the catbird seat',
    // 'in the sticks',
    // 'in your face',
    // 'indian giver',
    // 'indian summer',
    // 'is the pope catholic?',
    // 'it ain\'t over till the fat lady sings',
    // 'it\'s better to light a candle than curse the darkness',
    // 'it\'s not rocket science',
    // 'itty-bitty',
    // 'jeepers-creepers',
    // 'jobs for the boys',
    // 'joined at the hip',
    // 'jump on the bandwagon',
    // 'jump the gun',
    // 'jump the shark',
    // 'jury is still out - the',
    // 'kangaroo court - a',
    // 'katy bar the door',
    // 'keep shtum',
    // 'keep the ball rolling',
    // 'keep up with the joneses',
    // 'keep your chin up',
    // 'kilroy was here',
    // 'kiss and tell',
    // 'kit and caboodle - the',
    // 'knee-jerk reaction',
    // 'knock into a cocked hat',
    // 'know your onions',
    // 'la-la land',
    // 'lame duck - a',
    // 'lead balloon',
    // 'lead-pipe cinch - a',
    // 'let\'s roll',
    // 'level playing field - a',
    // 'life begins at forty',
    // 'live long and prosper',
    // 'loose cannon - a',
    // 'loose lips sink ships',
    // 'lose your marbles',
    // 'make a bee-line for',
    // 'make him an offer he can\'t refuse',
    // 'make my day',
    // 'marital aid',
    // 'memory lane',
    // 'men in suits',
    // 'mexican wave',
    // 'mickey finn',
    // 'middle of the road',
    // 'more bang for your buck',
    // 'mother country - the',
    // 'my bad',
    // 'my way or the highway',
    // 'name is mud',
    // 'never give a sucker an even break',
    // 'new kid on the block',
    // 'nitty-gritty',
    // 'no-brainer - a',
    'no dice',
    // 'no way, jose',
    'not rocket science',
    // 'not worth a plugged nickel',
    // 'nth degree',
    'off the record',
    // 'okey-dokey',
    // 'old chestnut',
    // 'on cloud nine',
    // 'on the bubble',
    // 'on the wagon',
    // 'on the warpath',
    // 'one-hit wonder',
    'one small step for man',
    // 'one stop shop',
    // 'paddle your own canoe',
    // 'paint the town red',
    // 'pass the buck',
    // 'peg out',
    // 'pennies from heaven',
    // 'pester power',
    // 'peter out',
    'picture-perfect',
    // 'pie in the sky',
    // 'piece of cake',
    'a piece of the action',
    // 'pipe dream',
    // 'play by ear',
    // 'play it again sam',
    // 'play the race card',
    // 'plug-ugly',
    // 'politically correct',
    // 'pond life',
    // 'power dressing',
    // 'preaching to the choir',
    // 'presto chango',
    // 'p.d.q. - pretty damn quick',
    // 'pride comes before a fall',
    // 'prime time',
    // 'pull the wool over your eyes',
    // 'pull up stakes',
    // 'punching above your weight',
    'push the envelope',
    // 'put on the wooden overcoat',
    // 'quality time',
    // 'razzle-dazzle',
    // 'red letter day',
    // 'riding shotgun',
    // 'rinky-dink',
    // 'rise and shine',
    // 'road apples',
    // 'road rage',
    // 'run a mile',
    // 'run of the mill',
    // 'sacred cow - a',
    // 'say goodnight gracie',
    // 'scraping the barrel',
    // 'scuse me while i kiss this guy',
    // 'security blanket',
    // 'seven-year itch',
    // 'shaggy dog story',
    // 'shot in the arm',
    // 'siamese twins',
    // 'silver bullet',
    // 'six ways to sunday',
    // 'sitting pretty',
    // 'six ways to sunday',
    // 'skid row',
    // 'smart casual',
    // 'smoke and mirrors',
    // 'sold down the river',
    // 'sound bite',
    // 'space, the final frontier',
    // 'speak softly and carry a big stick',
    // 'spelling-bee',
    // 'spill the beans',
    // 'spin doctor',
    // 'spring forward, fall back',
    // 'square meal',
    // 'stand up guy',
    // 'step up to the plate',
    // 'stranger danger',
    // 'stool pigeon',
    // 'super-duper',
    // 'surf and turf',
    // 'surfing the net/surfing the internet/surfing the web',
    // 'tail wagging the dog - the',
    // 'take the cake',
    // 'taken for a ride',
    // 'talk to the hand',
    // 'talk through one\'s hat',
    // 'no such thing as a free lunch',
    // 'teensy-weensy',
    'tell me about it',
    // 'that\'s all folks!',
    // 'that\'s all she wrote',
    // 'that\'s one small step for a man, a giant leap for mankind',
    // 'the ants are my friends, they\'re blowing in the wind',
    // 'the bee\'s knees',
    // 'the best defense is a good offence',
    // 'the big apple',
    // 'the big easy',
    // 'the buck stops here',
    // 'the camera cannot lie',
    // 'the customer is always right',
    // 'the elephant in the room',
    // 'the hairy eyeball',
    // 'the heebie-jeebies',
    // 'the jury is still out',
    // 'the road less travelled',
    // 'the show ain\'t over till the fat lady sings',
    // 'the pits',
    // 'the usual suspects',
    // 'the whole kit and caboodle',
    // 'the whole nine yards',
    // 'the whole shebang',
    // 'a sucker born every minute',
    // 'no such thing as a free lunch',
    // 'no such thing as bad publicity',
    // 'think outside the box',
    // 'thomas paine',
    // 'three strikes and you are out',
    // 'throw the towel in',
    // 'tic-tac-toe',
    // 'to beat the band',
    // 'to boldly go where no man has gone before',
    // 'toe-curling',
    // 'too big for your breeches',
    'top notch',
    // 'touchy-feely',
    // 'trick or treat',
    // 'tuckered out',
    // 'twenty three skidoo',
    // 'twenty four seven',
    // 'two cents worth',
    // 'up a gum tree',
    // 'up the creek without a paddle',
    // 'urban myth',
    // 'verbosity leads to unclear, inarticulate things',
    // 'vote with your feet',
    // 'walk free',
    // 'walk the walk',
    // 'walkie-talkie',
    // 'wear the trousers',
    // 'well-heeled',
    // 'what part of no do you not understand?',
    // 'what you see is what you get',
    'what\'s not to like?',
    // 'what\'s up doc?',
    // 'when the going gets tough, the tough get going',
    // 'when the **** hits the fan',
    // 'win one for the gipper',
    'yada yada',

    // ANIMALS
    'a bird in the hand is worth two in the bush',
    'a barking dog never bites',
    'a fish out of water',
    'a fly in the ointment',
    'a leopard cannot change its spots',
    'a little bird told me',
    'a red rag to a bull',
    'a wild goose chase',
    'as busy as a bee',
    'as dead as a dodo',
    'as happy as a clam',
    'as snug as a bug in a rug',
    'as the crow flies',
    'at one fell swoop',
    'barking mad',
    'barking up the wrong tree',
    'bats in the belfry',
    'bee in your bonnet',
    'birds of a feather flock together',
    'cat burglar',
    'chickens come home to roost',
    'counting sheep',
    'crocodile tears',
    'don\'t count your chickens before they are hatched ',
    'don\'t look a gift horse in the mouth ',
    'drinks like a fish',
    'dropping like flies',
    'elephant in the room',
    'even a worm will turn',
    'fly on the wall',
    'get off your high horse',
    'gee-up',
    'give a man a fish and you will feed him for a day',
    'go the whole hog',
    'going to the dogs',
    'green eyed monster',
    'grinning like a cheshire cat',
    'halcyon days',
    'has the cat got your tongue?',
    'hold your horses',
    'horse and cart',
    'if wishes were horses, beggars would ride',
    'like a moth to a flame',
    'lions led by donkeys',
    'make a bee-line',
    'never look a gift horse in the mouth',
    'a nice kettle of fish',
    'night owl',
    'paper tiger',
    'pearls before swine',
    'pigs might fly',
    'pop goes the weasel',
    'a pretty kettle of fish',
    'put the cart before the horse',
    'raining cats and dogs',
    'red herring',
    'separate the sheep from the goats',
    'straight from the horse\'s mouth ',

    'the bee\'s knees ',
    'the best laid schemes of mice and men',
    'the birds and the bees',
    'the chickens come home to roost',
    'the early bird catches the worm',
    'the elephant in the room',
    'the fly in the ointment',
    'the tail wagging the dog',
    'they couldn\'t hit the broad side of a barn at this distance ',
    'till the cows come home',
    'top dog',
    'turkeys voting for christmas',
    'wave a red rag to a bull',
    'when pigs fly',
    'wild goose chase',
    'you can lead a horse to water...',
    'you CAN teach an old dog new tricks',

    // AUSTRALIAN
    // BIBLE
    // BODY
    // COLOUR
    // CONFLICT
    // DEATH
    // DEVIL
    // DOGS
    // EMOTIONS
    // EUPHEMISM
    // FAMILY
    // FASHION
    // FOOD
    // FRENCH
    // HORSES
    // 'JACK'
    // LUCK
    // MONEY
    'A golden key can open any door',
    'could get a king\'s ransom',
    'A penny for your thoughts',
    'A rising tide lifts all boats',
    'An Aladdin\'s cave',
    'Another day, another dollar',
    'As nice as ninepence',
    'Bad money drives out good',
    'Bet your bottom dollar',
    'Cheap at half the price',
    'Cut off without a penny',
    'Dollars to doughnuts',
    'Filthy rich',
    'Fools\' gold',
    'Guinea pigs',
    'In for a penny, in for a pound',
    'In the red',
    'More bang for your buck',
    'Petty cash',
    'Scot free',
    'Silver bullet',
    'Slush fund',
    'Stinking rich',
    'The rich get richer and the poor get poorer',
    'Throw good money after bad',
    'Two cents worth',
    // MILITARY
    // MUSIC
    // NAMES
    // NATURE
    // NAUTICAL
    // NUMBERS
    // POLITICS
    // RELIGION
    // SHAKESPEARE
    // STUPIDITY
    // ENTERTAINMENT
    // WEATHER
    // WOMEN
    // WORK


]

module.exports = phrases;