goog.provide('website_helpers.filterable_items');
website_helpers.filterable_items.Name = new cljs.core.Keyword(null,"string","string",-1989541586);
/**
 * A more detailed description of a specific experience or mental-state.
 */
website_helpers.filterable_items.Details = new cljs.core.Keyword(null,"string","string",-1989541586);
website_helpers.filterable_items.Tag = new cljs.core.Keyword(null,"string","string",-1989541586);
/**
 * A syntax for writing experiences, to be parsed into maps for easier coding.
 *   Experiences are on the outer layer.
 */
website_helpers.filterable_items.Experiences = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),website_helpers.filterable_items.Name,website_helpers.filterable_items.Details,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),website_helpers.filterable_items.Tag], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),website_helpers.filterable_items.Name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),website_helpers.filterable_items.Name,website_helpers.filterable_items.Details], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),website_helpers.filterable_items.Name,website_helpers.filterable_items.Details,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),website_helpers.filterable_items.Tag], null)], null)], null)], null)], null)], null);
website_helpers.filterable_items.Info = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),website_helpers.filterable_items.Details], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),website_helpers.filterable_items.Tag], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),website_helpers.filterable_items.Name], null)], null)], null);
website_helpers.filterable_items.DataMap = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),website_helpers.filterable_items.Name,website_helpers.filterable_items.Info], null);
website_helpers.filterable_items.example_experiences_orig = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Comparing prices","When buying a good or service, comparing many alternatives to find the\n    best price. For example, looking at the price per pound of various grocery\n    items and picking the one with the lowest price.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["habit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Financial Control","A sense that you are living within or below your means.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["positive"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimization problem","Involves constantly scanning many options and determining the best one.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["engaging"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Slipways](https://slipways.net/)","A video game about colonizing planets and connecting them with trade\n    routes.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","solitary"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimization problem"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Weights","",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["exercise"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Drugs","",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["habit"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Running","",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["exercise"], null),cljs.core.PersistentVector.EMPTY], null)], null);
website_helpers.filterable_items.example_experiences = cljs.core.PersistentVector.fromArray([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Comparing prices","When buying a good or service, comparing many alternatives to find the\n  best price. For example, looking at the price per pound of various grocery\n  items and picking the one with the lowest price.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["habit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Financial Control","A feeling that you understand and are in control of your finances.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["positive"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning through possibilities","Constantly examining many options and determining the best one by some\n    usually simple criteria.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["engaging"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Bike Commuting](https://kovasap.github.io/docs/lifestyle-optimizations/bike-commuting/)","Using a bike to fulfill daily transportation needs. Best with combined with\n  audiobooks or podcasts.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lifestyle","exercise"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Relaxing","Feeling comfortable and liable to zone out.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["positive"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Lead Climbing in a Gym","Clipping quickdraws on the way up a climbing route in a gym.",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["climbing","exercise","\u2B50top10","social"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Thrill of Committment","Doing something with a penalty for failure that you can't turn back from."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Triumph over Exposure","Putting yourself in a stressful situation and showing yourself that you\n    can survive in it. I think this is a feeling Marc-Andr\u00E9 Leclerc was chasing\n    in the movie 'The Alpinist'."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Having a clear goal","The feeling of knowing exactly what you need to do."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Being in the Zone"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Backpack Hero](https://thejaspel.itch.io/backpack-hero)","A cool rougelike game about arranging a grid inventory optimally.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","turn-based"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Redditing","Browsing reddit. Some good subreddits include r/AnimalsBeingDerps and\n  r/DataIsBeautiful. Warning: can be a big time sink!",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["habit","consuming content"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Easy to do","Requires little to no difficult decision making, so is therefore easy to\n    pick up and do. This can lead to impulsively doing this thing too much."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Joy of sharing","The feeling you get when you find something cool and share it with someone\n    else."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Focus fragmenting","The feeling of constantly having your focus redirected, preventing you\n    from going deeper on any one particular thing."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Discovery of hidden gems","Most of the time this activity is monotonous and/or forgettable, but\n    occasionally it will yield an extremely memorable or life-changing\n    experience."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Browsing Hacker News","Like browsing reddit.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["habit","consuming content"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Easy to do"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Discovery of hidden gems"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Watching educational YouTube","This includes watching videos from channels like\n  [Veritasium](https://www.youtube.com/user/1veritasium), \n  [CGP Grey](https://www.youtube.com/user/CGPGrey),\n  and [Kurzgesagt](https://www.youtube.com/user/Kurzgesagt).",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["consuming content"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Wonder","A sense of wonder at the beauty of the world."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Watching GothamChess","Watching the GothamChess YouTube channel.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["consuming content"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Easy to do"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["False Understanding","A state of mind where something seems to make sense emotionally, but if\n    you were to try to explain it in your own words or otherwise apply the\n    knowledge you would fail."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Relaxing"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Watching Spiderman: Into the Spider-Verse","Great story, cool themes about family and parenting.  Also about self\n  discovery. Quintessential all-ages kind of film.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["movie","consuming content"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Watching Inside Out","I loved the modelling of the mind as a collection of different emotions\n  competing for control.  Really made me get invested with the main character,\n  and made me cry when things started going poorly for her at one point.\n  Discussing this movie might be a good way to connect with people that\n  are otherwise fairly different.  \n  ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["movie","consuming content"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Watching The Matrix","Watched with my Dad after being told that it would be very hard to understand.\n  Turned out that wasn't true for either of us.\n\n  Excellent sci-fi, where sci-fi is defined as a medium that explores how new\n  plausible technologies would affect the world.  Action/style was very compelling\n  to.  Favorite movie for many years, perhaps even still in some ways.\n\n  I think the sequels are pretty good, unlike many others.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["movie","consuming content"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Drafting Magic: The Gathering","My first experience was 'that complex card game that older kids played' when\n  I was very young.  Faintly remember that I specifically thought the lands were\n  really cool, have specific memory of the plains.  \n\n  Started playing first from a friend's cube (a collection of cards you can draft\n  decks from and then play each other in a tournament style).  Was pretty\n  intense/overwhelming at first, but in a good way.  \n\n  Since have played a bunch on MTG: Arena, a very polished computer interface\n  to the game.\n  ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","turn-based","competitive"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Wavelength or [Longwave](https://longwave.web.app/)","An icebreaker-type game that revolves around guessing people's opinions.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","social"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Codenames](https://codenames.game/)","One variant worth trying is trying to play with pictures instead of words on\n  the main board. A stand-alone game (Codenames Pictures) exists for this, but \n  it's also fun to try using custom pictures. For instance, the dream cards\n  from Mysterium led to a pretty fun game. Note that\n  [this site](https://codenames-pictures.dport.me/) looks like it allows you to\n  do this in a virtual setting.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","social"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chess","I've found lichess.org is a great place to play.",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","turn-based","competitive"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Yo-Yoing","Playing with a yo-yo, and learning new tricks for it.",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Skill clicking into place","The feeling when something that you thought was impossible, or otherwise\n    had no idea how to even approach doing, you can suddenly do effortlessly."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Beat Saber","Playing the VR rhythm game beat saber.",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Skill clicking into place"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Being in the Zone","Being in a state of mind where all your attention must be focused on a\n    single thing to avoid failure, leading to an emptiness of other thoughts."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Making Small Web Apps in ClojureScript with Reagent","See title :)",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["programming"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pride of Construction","Feeling proud or even in awe of something you made that is now a (semi)\n    permenant thing in the world. ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["positive"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chaos to Solution","The feeling when you have no idea how to fix something but suddenly a\n    solution appears out of nowhere. You may or may not understand how the\n    solution works or where it came from."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Apex Legends","A fast-paced first person shooter video game. Has extremely good art\n  direction, smooth gameplay, and balanced mechanics.",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","multiplayer","competitive","real-time"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Constructive regret","The feeling when you step out of a test and think 'I knew that answer!!'\n    in a way that makes you want to walk right back into the testing hall and\n    fix your mistake."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Wordle](https://www.nytimes.com/games/wordle/index.html)","A fun word game.",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","social","puzzle"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning through possibilities"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Quordle](https://www.quordle.com/#/)","A more complex form of wordle, with a higher frequency of [BS words](https://www.reddit.com/r/Quordle/comments/t27irp/unfair_word_today/).",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","social","puzzle"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning through possibilities"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[DAT Creativity](https://www.datcreativity.com/)","A test about tring to come up with the most different words possible.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning through possibilities"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Semantle](https://semantle.novalis.org/)","Similar to DAT Creativity, but a daily game like Wordle.",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","social","puzzle"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning through possibilities"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Puzzgrid](https://puzzgrid.com/best.php)","A game about matching ambiguous word meanings.",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","social","puzzle"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[The Witness](https://store.steampowered.com/app/210970/The_Witness/)","3-D puzzle game in a beautiful world",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","puzzle"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Opus Magnum](https://store.steampowered.com/app/558990/Opus_Magnum/)","Game about programming machines to build molecules.",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","puzzle","programming"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Fire Emblem 7 & 8](https://en.wikipedia.org/wiki/Fire_Emblem_(video_game%29)","I first played this game on the Game Boy Advance when I was in middle school.\nFor some reason the art style and especially animation really spoke to me, and\nI found the gameplay loop very compelling.  Fair warning though that this game\nmay be on this list mostly because of nostalgia.\n\nOne aspect of this game that I really enjoy is the process of building your\nparty over time and making sure you train the right characters.  It's very\nsatisfying to help a weaker character finish enemies to get experience with the\ngoal of making them a core part of your team composition later on.  This is\noften fairly difficult - since the characters are weaker after all - which only\nadds to the satisfaction when you pull it off.\n\nAnother cool mechanic in FE is building supports between characters.  When two\ncharacters fight side by side they will over time build a relationship, which\nleads to little dialogue bites.  It's satisfying to discover these as you play\nthrough the game.\n\nBoth training weaker units and building supports are examples of\n'meta-challenges' in FE; they aren't required to finish the games, but give you\nself-directed and sometimes difficult optional objectives during the battles.\nBecause these challenges are self directed they make me feel like I am\nexpressing myself more as a player, which makes the game feel more interesting\nthan if I was just solving the same battle puzzles as everyone else.",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","solitary","turn-based","story","\u2B50top10"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[XCOM 2 + War of the Chosen](https://en.wikipedia.org/wiki/XCOM_2)","Very similar appeal to Fire Emblem. Less story focused and more focused on \n  character customization.",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","solitary","turn-based","\u2B50top10"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Battle Brothers](http://battlebrothersgame.com/)","Good tactical RPG set in a low fantasy world.\n\n  Lots of character customization via different weapon types, and stat/perk\n  assignment on level up. Not to mention the starting stats given to each\n  character. Unfortunately, the randomness in this game will lead to characters\n  dying, so if you want to preserve specific characters get ready to save and\n  load a lot :).\n  \n  This game is pretty hard and doesn't necessarily give you direct feedback as\n  to why you are failing. The combat uses randomness pretty heavily to\n  determine hit/miss/crit (head hit) chance, which means that the consequences\n  of your actions are 'fuzzed' - good decisions will sometimes be punished, and\n  bad ones you will sometimes get away with. This means that it's tricky to\n  personally track if your strategy is working without a decent time investment\n  for each strategy you are trying.",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","solitary","turn-based"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Reactive Randomness Stress","Committing a decision and then bracing yourself for bad things to happen\n    based on some probability which you cannot stop (since you have already\n    committed)."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Fell Seal - Arbiter's Mark](https://www.fellseal.com/)","Really well designed game with a good story, deep character customization,\n  and difficult encounters. This game does a great job of letting you customize\n  your character abilities with a lot of depth, but still with enough\n  constraints to not make every character feel the same. Then, it makes the\n  encounters in the main story difficult, but allows you to level up your\n  characters in 'patrol' side-encounters in case the way you built your\n  characters was not optimal for the main story. This is an awesome way to\n  reward players who do a good job with their builds (they have to grind less)\n  without forcing players into said optimal builds.",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","solitary","turn-based","\u2B50top10"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Overwatch](https://en.wikipedia.org/wiki/Overwatch_(video_game%29)","",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","competitive"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Darkest Dungeon](https://en.wikipedia.org/wiki/Darkest_Dungeon)","Amazing atmosphere and fun character building.",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","solitary","turn-based","\u2B50top10"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bananagrams","One fun variant is to open a book in text format with some program that can \n  search text and make it so that you can only use words that exist in that\n  book.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","social"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Islanders](https://en.wikipedia.org/wiki/Islanders_(video_game%29)","Cool turn based city builder made with a beautiful art style.",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","solitary","turn-based","puzzle"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning through possibilities"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Bad North](https://www.badnorth.com/)","",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","solitary"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Rainbow 6: Siege","Very intense and engaging game that requires a high level of focus.  Every\nmovement made in this game produces audible sound, meaning that movement gives\naway your position and makes you vulnerable.  However, like in most shooters,\nif you proactively move to shoot at a particular point, you will still have an\nadvantage against someone reacting to your movement.  This leads to a dynamic\nwhere both you and your opponent are trying to determine the location of the\nother without giving away their own location - once one person knows with\ncertainty they can simply move to attack and will have a strong advantage.\n\nThis dynamic is framed by the asymmetric nature of all game modes, which have\nattacking and defending sides.  Attackers must move to engage the defenders,\nmeaning that they start out disadvantaged (they are moving and making noise\nwhile defenders are not).  To counter this, attackers all have remote control\ndrones that make noise when they move around.  These are easily destroyed, but\ncan be used to determine the locations of defenders, giving attackers\nadvantage.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","competitive"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CoD: MW2","This game was trash but at least it let me [make a YouTube video with 160k views](https://www.youtube.com/watch?v=fx1vtMZCFvI&ab_channel=s1lentProtector).",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","competitive"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Iron Danger](https://store.steampowered.com/app/899310/Iron_Danger/)","Really cool strategy game with a cool story. Would love it if they made a\n  sequel and/or expanded it into a bigger RPG with more customization.",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","story","solitary"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Slipways](https://slipways.net/)","A video game about colonizing planets and connecting them with trade\n  routes.",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","solitary","turn-based","puzzle"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning through possibilities"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Age of Darkness: Final Stand](https://www.ageofdarkness.com/)","A real-time-with-pause strategy game with excellent art. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","solitary"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Fitting puzzle pieces together","The feeling of finding the right place for a part of something you are\n    building."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Three Worlds\n      Collide](https://www.lesswrong.com/posts/HawFh7RvDM4RyoJ2d/three-worlds-collide-0-8)","Science fiction with a philosophical twist.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["story","philosophy"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Thought Provoking"], null)], null)], null)], true);
website_helpers.filterable_items.calc_similarity = (function website_helpers$filterable_items$calc_similarity(info1,info2){
return cljs.core.count(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(info1),new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(info2)));
});
website_helpers.filterable_items.Similarities = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),website_helpers.filterable_items.Name,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),website_helpers.filterable_items.Name,new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null);
website_helpers.filterable_items.get_all_similarities = (function website_helpers$filterable_items$get_all_similarities(data_map){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$filterable_items$get_all_similarities_$_iter__50196(s__50197){
return (new cljs.core.LazySeq(null,(function (){
var s__50197__$1 = s__50197;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__50197__$1);
if(temp__5825__auto__){
var s__50197__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50197__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__50197__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__50199 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__50198 = (0);
while(true){
if((i__50198 < size__5522__auto__)){
var vec__50206 = cljs.core._nth(c__5521__auto__,i__50198);
var name1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50206,(0),null);
var info1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50206,(1),null);
cljs.core.chunk_append(b__50199,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = ((function (i__50198,vec__50206,name1,info1,c__5521__auto__,size__5522__auto__,b__50199,s__50197__$2,temp__5825__auto__){
return (function website_helpers$filterable_items$get_all_similarities_$_iter__50196_$_iter__50209(s__50210){
return (new cljs.core.LazySeq(null,((function (i__50198,vec__50206,name1,info1,c__5521__auto__,size__5522__auto__,b__50199,s__50197__$2,temp__5825__auto__){
return (function (){
var s__50210__$1 = s__50210;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__50210__$1);
if(temp__5825__auto____$1){
var s__50210__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50210__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__50210__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__50212 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__50211 = (0);
while(true){
if((i__50211 < size__5522__auto____$1)){
var vec__50213 = cljs.core._nth(c__5521__auto____$1,i__50211);
var name2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50213,(0),null);
var info2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50213,(1),null);
cljs.core.chunk_append(b__50212,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name2,website_helpers.filterable_items.calc_similarity(info1,info2)], null));

var G__50398 = (i__50211 + (1));
i__50211 = G__50398;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50212),website_helpers$filterable_items$get_all_similarities_$_iter__50196_$_iter__50209(cljs.core.chunk_rest(s__50210__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50212),null);
}
} else {
var vec__50216 = cljs.core.first(s__50210__$2);
var name2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50216,(0),null);
var info2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50216,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name2,website_helpers.filterable_items.calc_similarity(info1,info2)], null),website_helpers$filterable_items$get_all_similarities_$_iter__50196_$_iter__50209(cljs.core.rest(s__50210__$2)));
}
} else {
return null;
}
break;
}
});})(i__50198,vec__50206,name1,info1,c__5521__auto__,size__5522__auto__,b__50199,s__50197__$2,temp__5825__auto__))
,null,null));
});})(i__50198,vec__50206,name1,info1,c__5521__auto__,size__5522__auto__,b__50199,s__50197__$2,temp__5825__auto__))
;
return iter__5523__auto__(data_map);
})())], null));

var G__50400 = (i__50198 + (1));
i__50198 = G__50400;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50199),website_helpers$filterable_items$get_all_similarities_$_iter__50196(cljs.core.chunk_rest(s__50197__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50199),null);
}
} else {
var vec__50220 = cljs.core.first(s__50197__$2);
var name1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50220,(0),null);
var info1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50220,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = ((function (vec__50220,name1,info1,s__50197__$2,temp__5825__auto__){
return (function website_helpers$filterable_items$get_all_similarities_$_iter__50196_$_iter__50223(s__50224){
return (new cljs.core.LazySeq(null,(function (){
var s__50224__$1 = s__50224;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__50224__$1);
if(temp__5825__auto____$1){
var s__50224__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50224__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__50224__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__50226 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__50225 = (0);
while(true){
if((i__50225 < size__5522__auto__)){
var vec__50228 = cljs.core._nth(c__5521__auto__,i__50225);
var name2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50228,(0),null);
var info2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50228,(1),null);
cljs.core.chunk_append(b__50226,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name2,website_helpers.filterable_items.calc_similarity(info1,info2)], null));

var G__50401 = (i__50225 + (1));
i__50225 = G__50401;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50226),website_helpers$filterable_items$get_all_similarities_$_iter__50196_$_iter__50223(cljs.core.chunk_rest(s__50224__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50226),null);
}
} else {
var vec__50235 = cljs.core.first(s__50224__$2);
var name2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50235,(0),null);
var info2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50235,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name2,website_helpers.filterable_items.calc_similarity(info1,info2)], null),website_helpers$filterable_items$get_all_similarities_$_iter__50196_$_iter__50223(cljs.core.rest(s__50224__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__50220,name1,info1,s__50197__$2,temp__5825__auto__))
;
return iter__5523__auto__(data_map);
})())], null),website_helpers$filterable_items$get_all_similarities_$_iter__50196(cljs.core.rest(s__50197__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(data_map);
})());
});
website_helpers.filterable_items.get_closest_name = (function website_helpers$filterable_items$get_closest_name(name,similarities){
var distances = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(similarities,name),name);
return cljs.core.first(cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__50242_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(distances,p1__50242_SHARP_);
}),cljs.core.keys(distances))));
});
/**
 * Remove the given name from the similarities map.
 */
website_helpers.filterable_items.prune_similarities = (function website_helpers$filterable_items$prune_similarities(name_to_prune,similarities){
return clojure.walk.postwalk((function (p1__50246_SHARP_){
if(cljs.core.map_QMARK_(p1__50246_SHARP_)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50246_SHARP_,name_to_prune);
} else {
return p1__50246_SHARP_;
}
}),similarities);
});
website_helpers.filterable_items._get_rest = (function website_helpers$filterable_items$_get_rest(last_name,similarities){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(similarities))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_name], null);
} else {
var cur_name = website_helpers.filterable_items.get_closest_name(last_name,similarities);
var pruned_similarities = website_helpers.filterable_items.prune_similarities(last_name,similarities);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_name], null),(website_helpers.filterable_items._get_rest.cljs$core$IFn$_invoke$arity$2 ? website_helpers.filterable_items._get_rest.cljs$core$IFn$_invoke$arity$2(cur_name,pruned_similarities) : website_helpers.filterable_items._get_rest.call(null,cur_name,pruned_similarities)));

}
});
/**
 * Sort the input data map by tag similarity.
 *   
 *   This is done by computing a similarity score between every pair of items,
 *   then solving the travelling salesman problem given these pairs.
 */
website_helpers.filterable_items.sort_by_tags = (function website_helpers$filterable_items$sort_by_tags(data_map){
var similarities = website_helpers.filterable_items.get_all_similarities(data_map);
var start_name = cljs.core.first(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(data_map)));
var sorted_names = website_helpers.filterable_items._get_rest(start_name,similarities);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),(function (){var iter__5523__auto__ = (function website_helpers$filterable_items$sort_by_tags_$_iter__50252(s__50253){
return (new cljs.core.LazySeq(null,(function (){
var s__50253__$1 = s__50253;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__50253__$1);
if(temp__5825__auto__){
var s__50253__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50253__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__50253__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__50255 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__50254 = (0);
while(true){
if((i__50254 < size__5522__auto__)){
var name = cljs.core._nth(c__5521__auto__,i__50254);
cljs.core.chunk_append(b__50255,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_map,name)], null));

var G__50407 = (i__50254 + (1));
i__50254 = G__50407;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50255),website_helpers$filterable_items$sort_by_tags_$_iter__50252(cljs.core.chunk_rest(s__50253__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50255),null);
}
} else {
var name = cljs.core.first(s__50253__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_map,name)], null),website_helpers$filterable_items$sort_by_tags_$_iter__50252(cljs.core.rest(s__50253__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(sorted_names);
})());
});
/**
 * Cleans newlines and other stuff out of strings.
 */
website_helpers.filterable_items.clean = (function website_helpers$filterable_items$clean(string){
if((string == null)){
return "";
} else {
return clojure.string.replace(string,/\n +/," ");
}
});
website_helpers.filterable_items.make_experience_map = (function website_helpers$filterable_items$make_experience_map(raw_experiences){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$filterable_items$make_experience_map_$_iter__50260(s__50261){
return (new cljs.core.LazySeq(null,(function (){
var s__50261__$1 = s__50261;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__50261__$1);
if(temp__5825__auto__){
var s__50261__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50261__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__50261__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__50263 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__50262 = (0);
while(true){
if((i__50262 < size__5522__auto__)){
var vec__50264 = cljs.core._nth(c__5521__auto__,i__50262);
var experience_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50264,(0),null);
var details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50264,(1),null);
var tags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50264,(2),null);
var mental_states = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50264,(3),null);
cljs.core.chunk_append(b__50263,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.filterable_items.clean(experience_name),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"details","details",1956795411),website_helpers.filterable_items.clean(details),new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.set(tags),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,(function (){var iter__5523__auto__ = ((function (i__50262,vec__50264,experience_name,details,tags,mental_states,c__5521__auto__,size__5522__auto__,b__50263,s__50261__$2,temp__5825__auto__){
return (function website_helpers$filterable_items$make_experience_map_$_iter__50260_$_iter__50270(s__50271){
return (new cljs.core.LazySeq(null,((function (i__50262,vec__50264,experience_name,details,tags,mental_states,c__5521__auto__,size__5522__auto__,b__50263,s__50261__$2,temp__5825__auto__){
return (function (){
var s__50271__$1 = s__50271;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__50271__$1);
if(temp__5825__auto____$1){
var s__50271__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50271__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__50271__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__50273 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__50272 = (0);
while(true){
if((i__50272 < size__5522__auto____$1)){
var vec__50274 = cljs.core._nth(c__5521__auto____$1,i__50272);
var mental_state_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50274,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50274,(1),null);
cljs.core.chunk_append(b__50273,website_helpers.filterable_items.clean(mental_state_name));

var G__50415 = (i__50272 + (1));
i__50272 = G__50415;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50273),website_helpers$filterable_items$make_experience_map_$_iter__50260_$_iter__50270(cljs.core.chunk_rest(s__50271__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50273),null);
}
} else {
var vec__50277 = cljs.core.first(s__50271__$2);
var mental_state_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50277,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50277,(1),null);
return cljs.core.cons(website_helpers.filterable_items.clean(mental_state_name),website_helpers$filterable_items$make_experience_map_$_iter__50260_$_iter__50270(cljs.core.rest(s__50271__$2)));
}
} else {
return null;
}
break;
}
});})(i__50262,vec__50264,experience_name,details,tags,mental_states,c__5521__auto__,size__5522__auto__,b__50263,s__50261__$2,temp__5825__auto__))
,null,null));
});})(i__50262,vec__50264,experience_name,details,tags,mental_states,c__5521__auto__,size__5522__auto__,b__50263,s__50261__$2,temp__5825__auto__))
;
return iter__5523__auto__(mental_states);
})())], null)], null));

var G__50416 = (i__50262 + (1));
i__50262 = G__50416;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50263),website_helpers$filterable_items$make_experience_map_$_iter__50260(cljs.core.chunk_rest(s__50261__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50263),null);
}
} else {
var vec__50280 = cljs.core.first(s__50261__$2);
var experience_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50280,(0),null);
var details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50280,(1),null);
var tags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50280,(2),null);
var mental_states = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50280,(3),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.filterable_items.clean(experience_name),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"details","details",1956795411),website_helpers.filterable_items.clean(details),new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.set(tags),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,(function (){var iter__5523__auto__ = ((function (vec__50280,experience_name,details,tags,mental_states,s__50261__$2,temp__5825__auto__){
return (function website_helpers$filterable_items$make_experience_map_$_iter__50260_$_iter__50283(s__50284){
return (new cljs.core.LazySeq(null,(function (){
var s__50284__$1 = s__50284;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__50284__$1);
if(temp__5825__auto____$1){
var s__50284__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50284__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__50284__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__50286 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__50285 = (0);
while(true){
if((i__50285 < size__5522__auto__)){
var vec__50287 = cljs.core._nth(c__5521__auto__,i__50285);
var mental_state_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50287,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50287,(1),null);
cljs.core.chunk_append(b__50286,website_helpers.filterable_items.clean(mental_state_name));

var G__50421 = (i__50285 + (1));
i__50285 = G__50421;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50286),website_helpers$filterable_items$make_experience_map_$_iter__50260_$_iter__50283(cljs.core.chunk_rest(s__50284__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50286),null);
}
} else {
var vec__50290 = cljs.core.first(s__50284__$2);
var mental_state_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50290,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50290,(1),null);
return cljs.core.cons(website_helpers.filterable_items.clean(mental_state_name),website_helpers$filterable_items$make_experience_map_$_iter__50260_$_iter__50283(cljs.core.rest(s__50284__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__50280,experience_name,details,tags,mental_states,s__50261__$2,temp__5825__auto__))
;
return iter__5523__auto__(mental_states);
})())], null)], null),website_helpers$filterable_items$make_experience_map_$_iter__50260(cljs.core.rest(s__50261__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(raw_experiences);
})());
});
/**
 * Combines two sets, filtering out any nil or empty string values from the
 *   second set.
 */
website_helpers.filterable_items.accrete_set = (function website_helpers$filterable_items$accrete_set(existing,new$){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(existing,cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50293_SHARP_){
return (!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,"",null], null), null),p1__50293_SHARP_)));
}),new$)));
});
/**
 * Adds a single [Name Info] pair to an DataMap, merging it with an existing
 *   entry if need be.
 */
website_helpers.filterable_items._accrete_mental_states = (function website_helpers$filterable_items$_accrete_mental_states(data_map,p__50295){
var vec__50296 = p__50295;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50296,(0),null);
var map__50299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50296,(1),null);
var map__50299__$1 = cljs.core.__destructure_map(map__50299);
var details = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50299__$1,new cljs.core.Keyword(null,"details","details",1956795411));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50299__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50299__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var map__50301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_map,name);
var map__50301__$1 = cljs.core.__destructure_map(map__50301);
var existing_details = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50301__$1,new cljs.core.Keyword(null,"details","details",1956795411),"");
var existing_tags = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50301__$1,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentHashSet.EMPTY);
var existing_children = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50301__$1,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data_map,name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"details","details",1956795411),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(existing_details),cljs.core.str.cljs$core$IFn$_invoke$arity$1(details)].join(''),new cljs.core.Keyword(null,"tags","tags",1771418977),website_helpers.filterable_items.accrete_set(existing_tags,tags),new cljs.core.Keyword(null,"children","children",-940561982),website_helpers.filterable_items.accrete_set(existing_children,children)], null));
});
website_helpers.filterable_items.make_mental_state_map = (function website_helpers$filterable_items$make_mental_state_map(raw_experiences){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(website_helpers.filterable_items._accrete_mental_states,cljs.core.PersistentArrayMap.EMPTY,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__5523__auto__ = (function website_helpers$filterable_items$make_mental_state_map_$_iter__50306(s__50307){
return (new cljs.core.LazySeq(null,(function (){
var s__50307__$1 = s__50307;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__50307__$1);
if(temp__5825__auto__){
var s__50307__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50307__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__50307__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__50309 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__50308 = (0);
while(true){
if((i__50308 < size__5522__auto__)){
var vec__50317 = cljs.core._nth(c__5521__auto__,i__50308);
var experience_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50317,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50317,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50317,(2),null);
var mental_states = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50317,(3),null);
cljs.core.chunk_append(b__50309,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = ((function (i__50308,vec__50317,experience_name,_,___$1,mental_states,c__5521__auto__,size__5522__auto__,b__50309,s__50307__$2,temp__5825__auto__){
return (function website_helpers$filterable_items$make_mental_state_map_$_iter__50306_$_iter__50320(s__50321){
return (new cljs.core.LazySeq(null,((function (i__50308,vec__50317,experience_name,_,___$1,mental_states,c__5521__auto__,size__5522__auto__,b__50309,s__50307__$2,temp__5825__auto__){
return (function (){
var s__50321__$1 = s__50321;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__50321__$1);
if(temp__5825__auto____$1){
var s__50321__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50321__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__50321__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__50323 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__50322 = (0);
while(true){
if((i__50322 < size__5522__auto____$1)){
var vec__50324 = cljs.core._nth(c__5521__auto____$1,i__50322);
var mental_state_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50324,(0),null);
var mental_state_details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50324,(1),null);
var mental_state_tags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50324,(2),null);
cljs.core.chunk_append(b__50323,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.filterable_items.clean(mental_state_name),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"details","details",1956795411),website_helpers.filterable_items.clean(mental_state_details),new cljs.core.Keyword(null,"tags","tags",1771418977),(((mental_state_tags == null))?cljs.core.PersistentHashSet.EMPTY:cljs.core.set(mental_state_tags)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentHashSet.createAsIfByAssoc([website_helpers.filterable_items.clean(experience_name)])], null)], null));

var G__50429 = (i__50322 + (1));
i__50322 = G__50429;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50323),website_helpers$filterable_items$make_mental_state_map_$_iter__50306_$_iter__50320(cljs.core.chunk_rest(s__50321__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50323),null);
}
} else {
var vec__50327 = cljs.core.first(s__50321__$2);
var mental_state_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50327,(0),null);
var mental_state_details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50327,(1),null);
var mental_state_tags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50327,(2),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.filterable_items.clean(mental_state_name),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"details","details",1956795411),website_helpers.filterable_items.clean(mental_state_details),new cljs.core.Keyword(null,"tags","tags",1771418977),(((mental_state_tags == null))?cljs.core.PersistentHashSet.EMPTY:cljs.core.set(mental_state_tags)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentHashSet.createAsIfByAssoc([website_helpers.filterable_items.clean(experience_name)])], null)], null),website_helpers$filterable_items$make_mental_state_map_$_iter__50306_$_iter__50320(cljs.core.rest(s__50321__$2)));
}
} else {
return null;
}
break;
}
});})(i__50308,vec__50317,experience_name,_,___$1,mental_states,c__5521__auto__,size__5522__auto__,b__50309,s__50307__$2,temp__5825__auto__))
,null,null));
});})(i__50308,vec__50317,experience_name,_,___$1,mental_states,c__5521__auto__,size__5522__auto__,b__50309,s__50307__$2,temp__5825__auto__))
;
return iter__5523__auto__(mental_states);
})()));

var G__50430 = (i__50308 + (1));
i__50308 = G__50430;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50309),website_helpers$filterable_items$make_mental_state_map_$_iter__50306(cljs.core.chunk_rest(s__50307__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50309),null);
}
} else {
var vec__50333 = cljs.core.first(s__50307__$2);
var experience_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50333,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50333,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50333,(2),null);
var mental_states = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50333,(3),null);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = ((function (vec__50333,experience_name,_,___$1,mental_states,s__50307__$2,temp__5825__auto__){
return (function website_helpers$filterable_items$make_mental_state_map_$_iter__50306_$_iter__50336(s__50337){
return (new cljs.core.LazySeq(null,(function (){
var s__50337__$1 = s__50337;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__50337__$1);
if(temp__5825__auto____$1){
var s__50337__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50337__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__50337__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__50339 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__50338 = (0);
while(true){
if((i__50338 < size__5522__auto__)){
var vec__50344 = cljs.core._nth(c__5521__auto__,i__50338);
var mental_state_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50344,(0),null);
var mental_state_details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50344,(1),null);
var mental_state_tags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50344,(2),null);
cljs.core.chunk_append(b__50339,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.filterable_items.clean(mental_state_name),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"details","details",1956795411),website_helpers.filterable_items.clean(mental_state_details),new cljs.core.Keyword(null,"tags","tags",1771418977),(((mental_state_tags == null))?cljs.core.PersistentHashSet.EMPTY:cljs.core.set(mental_state_tags)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentHashSet.createAsIfByAssoc([website_helpers.filterable_items.clean(experience_name)])], null)], null));

var G__50432 = (i__50338 + (1));
i__50338 = G__50432;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50339),website_helpers$filterable_items$make_mental_state_map_$_iter__50306_$_iter__50336(cljs.core.chunk_rest(s__50337__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50339),null);
}
} else {
var vec__50347 = cljs.core.first(s__50337__$2);
var mental_state_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50347,(0),null);
var mental_state_details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50347,(1),null);
var mental_state_tags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50347,(2),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.filterable_items.clean(mental_state_name),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"details","details",1956795411),website_helpers.filterable_items.clean(mental_state_details),new cljs.core.Keyword(null,"tags","tags",1771418977),(((mental_state_tags == null))?cljs.core.PersistentHashSet.EMPTY:cljs.core.set(mental_state_tags)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentHashSet.createAsIfByAssoc([website_helpers.filterable_items.clean(experience_name)])], null)], null),website_helpers$filterable_items$make_mental_state_map_$_iter__50306_$_iter__50336(cljs.core.rest(s__50337__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__50333,experience_name,_,___$1,mental_states,s__50307__$2,temp__5825__auto__))
;
return iter__5523__auto__(mental_states);
})()),website_helpers$filterable_items$make_mental_state_map_$_iter__50306(cljs.core.rest(s__50307__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(raw_experiences);
})()));
});
website_helpers.filterable_items.make_mental_state_map(website_helpers.filterable_items.example_experiences);
website_helpers.filterable_items.make_tag_hiccup = (function website_helpers$filterable_items$make_tag_hiccup(tags,selected_tags){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Tags: ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50350_SHARP_){
if(cljs.core.truth_((selected_tags.cljs$core$IFn$_invoke$arity$1 ? selected_tags.cljs$core$IFn$_invoke$arity$1(p1__50350_SHARP_) : selected_tags.call(null,p1__50350_SHARP_)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__50350_SHARP_], null),p1__50350_SHARP_], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__50350_SHARP_], null),p1__50350_SHARP_], null);
}
}),cljs.core.sort.cljs$core$IFn$_invoke$arity$1(tags)))], null);
});
/**
 * Removes links or other hiccup wrappers from a string.
 */
website_helpers.filterable_items.get_raw_string = (function website_helpers$filterable_items$get_raw_string(string){
if(typeof string === 'string'){
return string;
} else {
var G__50353 = cljs.core.last(string);
return (website_helpers.filterable_items.get_raw_string.cljs$core$IFn$_invoke$arity$1 ? website_helpers.filterable_items.get_raw_string.cljs$core$IFn$_invoke$arity$1(G__50353) : website_helpers.filterable_items.get_raw_string.call(null,G__50353));
}
});
website_helpers.filterable_items.anchor_string = (function website_helpers$filterable_items$anchor_string(item_name){
return clojure.string.replace(website_helpers.filterable_items.get_raw_string(item_name)," ","-");
});
website_helpers.filterable_items.anchor = (function website_helpers$filterable_items$anchor(item_name){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"anchor",new cljs.core.Keyword(null,"href","href",-793805698),["#",website_helpers.filterable_items.anchor_string(item_name)].join('')], null),"#"], null);
});
/**
 * Converts a sequence of string to hiccup. 
 */
website_helpers.filterable_items.list_to_hiccup = (function website_helpers$filterable_items$list_to_hiccup(strings){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5523__auto__ = (function website_helpers$filterable_items$list_to_hiccup_$_iter__50355(s__50356){
return (new cljs.core.LazySeq(null,(function (){
var s__50356__$1 = s__50356;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__50356__$1);
if(temp__5825__auto__){
var s__50356__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50356__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__50356__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__50358 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__50357 = (0);
while(true){
if((i__50357 < size__5522__auto__)){
var s = cljs.core._nth(c__5521__auto__,i__50357);
var hiccup = cljs.core.rest(website_helpers.utils.my_md__GT_hiccup(s));
cljs.core.chunk_append(b__50358,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),s], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(website_helpers.filterable_items.anchor(hiccup),website_helpers.filterable_items.get_raw_string(hiccup))], null));

var G__50440 = (i__50357 + (1));
i__50357 = G__50440;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50358),website_helpers$filterable_items$list_to_hiccup_$_iter__50355(cljs.core.chunk_rest(s__50356__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50358),null);
}
} else {
var s = cljs.core.first(s__50356__$2);
var hiccup = cljs.core.rest(website_helpers.utils.my_md__GT_hiccup(s));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),s], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(website_helpers.filterable_items.anchor(hiccup),website_helpers.filterable_items.get_raw_string(hiccup))], null),website_helpers$filterable_items$list_to_hiccup_$_iter__50355(cljs.core.rest(s__50356__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(strings);
})()], null);
});
goog.exportSymbol('website_helpers.filterable_items.list_to_hiccup', website_helpers.filterable_items.list_to_hiccup);
/**
 * Example:
 *   
 *   ```
 *   Recipe 1:
 * - Ingredient 1
 * - Ingredient 2
 * 
 *   Recipe 2:
 * - Ingredient 2
 * - Ingredient 3
 * ...
 *   ...
 *   ```
 * 
 *   Or
 * 
 *   ```
 *   Ingredient 1:
 * - Recipe 1
 * - Recipe 3
 * 
 *   Ingredient 2:
 * - Recipe 1
 * - Recipe 2
 * ...
 *   ...
 *   ```
 *   
 */
website_helpers.filterable_items.aggregated_items = (function website_helpers$filterable_items$aggregated_items(data_name,other_name,data_map){
var tag_selections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(website_helpers.utils.get_url_param_selections(cljs.core.set(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.vals(data_map)))),website_helpers.global.url_params));
return (function (data_name__$1,other_name__$1,data_map__$1){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),data_name__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.common_components.dropdown_check_list,tag_selections,"Select Tags",(function (){
return cljs.core.List.EMPTY;
})], null)], null)], null),(function (){var iter__5523__auto__ = (function website_helpers$filterable_items$aggregated_items_$_iter__50367(s__50368){
return (new cljs.core.LazySeq(null,(function (){
var s__50368__$1 = s__50368;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__50368__$1);
if(temp__5825__auto__){
var s__50368__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50368__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__50368__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__50370 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__50369 = (0);
while(true){
if((i__50369 < size__5522__auto__)){
var vec__50377 = cljs.core._nth(c__5521__auto__,i__50369);
var item_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50377,(0),null);
var map__50380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50377,(1),null);
var map__50380__$1 = cljs.core.__destructure_map(map__50380);
var details = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50380__$1,new cljs.core.Keyword(null,"details","details",1956795411));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50380__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50380__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var selected_tags = website_helpers.utils.get_selected_vars(cljs.core.deref(tag_selections));
var hiccup_name = website_helpers.utils.my_md__GT_hiccup(item_name);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(selected_tags),cljs.core.count(cljs.core.deref(tag_selections)))) || (clojure.set.subset_QMARK_(selected_tags,tags)))){
cljs.core.chunk_append(b__50370,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item_name], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),website_helpers.filterable_items.anchor_string(hiccup_name)], null),hiccup_name,website_helpers.filterable_items.anchor(hiccup_name)], null),website_helpers.filterable_items.make_tag_hiccup(tags,selected_tags),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),website_helpers.utils.my_md__GT_hiccup(details)," ",other_name__$1,":"], null),website_helpers.filterable_items.list_to_hiccup(children)], null));

var G__50447 = (i__50369 + (1));
i__50369 = G__50447;
continue;
} else {
var G__50448 = (i__50369 + (1));
i__50369 = G__50448;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50370),website_helpers$filterable_items$aggregated_items_$_iter__50367(cljs.core.chunk_rest(s__50368__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50370),null);
}
} else {
var vec__50381 = cljs.core.first(s__50368__$2);
var item_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50381,(0),null);
var map__50384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50381,(1),null);
var map__50384__$1 = cljs.core.__destructure_map(map__50384);
var details = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50384__$1,new cljs.core.Keyword(null,"details","details",1956795411));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50384__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50384__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var selected_tags = website_helpers.utils.get_selected_vars(cljs.core.deref(tag_selections));
var hiccup_name = website_helpers.utils.my_md__GT_hiccup(item_name);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(selected_tags),cljs.core.count(cljs.core.deref(tag_selections)))) || (clojure.set.subset_QMARK_(selected_tags,tags)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item_name], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),website_helpers.filterable_items.anchor_string(hiccup_name)], null),hiccup_name,website_helpers.filterable_items.anchor(hiccup_name)], null),website_helpers.filterable_items.make_tag_hiccup(tags,selected_tags),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),website_helpers.utils.my_md__GT_hiccup(details)," ",other_name__$1,":"], null),website_helpers.filterable_items.list_to_hiccup(children)], null),website_helpers$filterable_items$aggregated_items_$_iter__50367(cljs.core.rest(s__50368__$2)));
} else {
var G__50450 = cljs.core.rest(s__50368__$2);
s__50368__$1 = G__50450;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(website_helpers.filterable_items.sort_by_tags(data_map__$1));
})());
});
});
goog.exportSymbol('website_helpers.filterable_items.aggregated_items', website_helpers.filterable_items.aggregated_items);
website_helpers.filterable_items.make_aggregated_items = (function website_helpers$filterable_items$make_aggregated_items(raw_experiences){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.filterable_items.aggregated_items,"Experiences","States of Mind",website_helpers.filterable_items.make_experience_map(raw_experiences)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.filterable_items.aggregated_items,"States of Mind","Experiences",website_helpers.filterable_items.make_mental_state_map(raw_experiences)], null)], null);
});
});
goog.exportSymbol('website_helpers.filterable_items.make_aggregated_items', website_helpers.filterable_items.make_aggregated_items);

//# sourceMappingURL=website_helpers.filterable_items.js.map
