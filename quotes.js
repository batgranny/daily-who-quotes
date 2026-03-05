const quotes = [
  // Classic Series
  {
    text: "There's no point in being grown up if you can't be childish sometimes.",
    character: "The Fourth Doctor",
    story: "Robot"
  },
  {
    text: "Whole worlds pivot on acts of imagination.",
    character: "The Thirteenth Doctor",
    story: "The Tsuranga Conundrum"
  },
  {
    text: "The universe has to move forward. Pain and loss, they define us as much as happiness or love. Whether it's a world, or a relationship... Everything has its time. And everything ends.",
    character: "Sarah Jane Smith",
    story: "School Reunion"
  },
  {
    text: "You can't rule the world in hiding. You've got to come out on the balcony sometimes and wave a tentacle.",
    character: "The Fourth Doctor",
    story: "The Seeds of Doom"
  },
  {
    text: "Anybody remotely interesting is mad, in some way or another.",
    character: "The Seventh Doctor",
    story: "The Greatest Show in the Galaxy"
  },
  {
    text: "Courage isn't just a matter of not being frightened, you know. It's being afraid and doing what you have to do anyway.",
    character: "The Third Doctor",
    story: "Planet of the Daleks"
  },
  {
    text: "A straight line may be the shortest distance between two points, but it is by no means the most interesting.",
    character: "The Third Doctor",
    story: "The Time Warrior"
  },

  // Modern Series
  {
    text: "We're all stories, in the end. Just make it a good one, eh?",
    character: "The Eleventh Doctor",
    story: "The Big Bang"
  },
  {
    text: "The way I see it, every life is a pile of good things and bad things. The good things don’t always soften the bad things, but vice versa, the bad things don’t necessarily spoil the good things or make them unimportant.",
    character: "The Eleventh Doctor",
    story: "Vincent and the Doctor"
  },
  {
    text: "Logic, my dear Zoe, merely enables one to be wrong with authority.",
    character: "The Second Doctor",
    story: "The Wheel in Space"
  },
  {
    text: "Crush the lesser races! Conquer the galaxy! Unimaginable power! Unlimited rice pudding! Et cetera! Et cetera!",
    character: "The Seventh Doctor",
    story: "Remembrance of the Daleks"
  },
  {
    text: "I tolerate this century, but I don't enjoy it.",
    character: "The Third Doctor",
    story: "Day of the Daleks"
  },
  {
    text: "I say, what a wonderful butler. He's so violent!",
    character: "The Fourth Doctor",
    story: "City of Death"
  },
  {
    text: "Well that's my job you see, I'm a thief. This is Romana, she's my accomplice. And this is Duggan and it's his job to catch me. You see our lines of work dovetail beautifully.",
    character: "The Fourth Doctor",
    story: "City of Death"
  },
  {
    text: "Always try to be nice, but never fail to be kind.",
    character: "The Twelfth Doctor",
    story: "Twice Upon a Time"
  },
  {
    text: "The way I see it, every life is a pile of good things and bad things. The good things don’t always soften the bad things, but vice versa, the bad things don’t always spoil the good things or make them unimportant.",
    character: "The Eleventh Doctor",
    story: "Vincent and the Doctor"
  },
  {
    text: "To be smart is not to stop being stupid. It's to be better at ignoring the stupid.",
    character: "The Twelfth Doctor",
    story: "Dark Water"
  },
  {
    text: "You know, the very powerful and the very stupid have one thing in common. They don't alter their views to fit the facts; they alter the facts to fit their views.",
    character: "The Fourth Doctor",
    story: "The Face of Evil"
  },
  {
    text: "To the rational mind, nothing is inexplicable; only unexplained.",
    character: "The Fourth Doctor",
    story: "Robots of Death"
  },
  {
    text: "I am and always will be the optimist. The hoper of far-flung hopes, and the dreamer of improbable dreams.",
    character: "The Eleventh Doctor",
    story: "The Almost People"
  },
  {
    text: "We all change. When you think about it, we’re all different people all through our lives, and that’s ok. That’s good! You got to keep moving, so long as you remember all the different people you used to be.",
    character: "The Eleventh Doctor",
    story: "The Time of the Doctor"
  },
  {
    text: "Never be cruel, never be cowardly.",
    character: "The Twelfth Doctor",
    story: "Hell Bent"
  },
  {
    text: "900 years of time and space and I've never met anyone who wasn't important.",
    character: "The Eleventh Doctor",
    story: "A Christmas Carol"
  },
  {
    text: "I could show you everything if you stop being afraid of what you don’t understand!",
    character: "The Thirteenth Doctor",
    story: "The Witchfinders"
  },
  {
    text: "Every great decision creates ripples, like a huge boulder dropped in a lake. The ripples merge and rebound off the banks in unforeseeable ways. The heavier the decision, the larger the waves, the more uncertain the consequences.",
    character: "The Seventh Doctor",
    story: "Remembrance of the Daleks"
  },
  {
    text: "Interfere? Of course we should interfere! Always do what you're best at, that's what I say.",
    character: "The Fourth Doctor",
    story: "The Nightmare of Eden"
  },
  {
    text: "But Doctor this is exactly your cup of tea. This fellow's bright green apparently. And dead.",
    character: "The Brigadier",
    story: "The Green Death"
  },
  {
    text: "Well, I'm that mysterious adventurer in time and space, known only as Doctor Who, and these are my disposables — Exposition and Comic Relief.",
    character: "Missy",
    story: "The Magician's Apprentice"
  },
  {
    text: "You think it'll last forever, people and cars and concrete, but it won't. One day it's all gone. Even the sky.",
    character: "The Tenth Doctor",
    story: "The End of the World"
  },
  {
    text: "You don't need to be cruel to be kind.",
    character: "The Twelfth Doctor",
    story: "The Doctor Falls"
  },
  {
    text: "You don't just give up! You don't just let things happen! You make a stand! You say no! You have the guts to do what's right, even when everyone else just runs away!",
    character: "Rose Tyler",
    story: "The Parting of the Ways"
  },
  {
    text: "He's like fire, and ice, and rage. He's like the night and the storm at the heart of the sun. He's ancient and forever. He burns at the centre of time and he can see the turn of the Universe. And he's wonderful.",
    character: "Tim Latimer",
    story: "The Family of Blood"
  },
  {
    text: "Some things are worth getting your heart broken for.",
    character: "Sarah Jane Smith",
    story: "School Reunion"
  },
  {
    text: "Good evening. I'm a lizard woman from the dawn of time, and this is my wife.",
    character: "Madam Vastra",
    story: "The Snowmen"
  },
  {
    text: "THIS IS NOT WAR, THIS IS PEST CONTROL",
    character: "Dalek Sec",
    story: "Doomsday"
  },
  {
    text: "Quirks? Me? Oh, you're on shaky ground. If you had any more tawdry quirks you could open up a Tawdry Quirk Shop. The madcap vehicle, the cockamamie hair, the clothes designed by a first-year fashion student. I'm surprised you haven't got a little purple space dog just to ram home what an intergalactic wag you are.",
    character: "The Dream Lord",
    story: "Amy's Choice"
  },
  {
    text: "You want weapons? We're in a library! Books! The best weapons in the world!",
    character: "The Tenth Doctor",
    story: "Tooth and Claw"
  },
  {
    text: "You have the mouth of a prattling jackanapes, but your eyes. They tell a different story.",
    character: "Sharez Jek",
    story: "The Caves of Androzani"
  },
  {
    text: "You spend all your time thinking about dying, like you're gonna get killed by eggs, or beef, or global warming or asteroids. But you never take time to imagine the impossible - like maybe you survive.",
    character: "The Tenth Doctor",
    story: "The End of the World"
  },
  {
    text: "Never guess. Unless you have to. There is enough uncertainty in the universe.",
    character: "The Fourth Doctor",
    story: "The Face of Evil"
  },
  {
    text: "There isn't such a thing as prophecy or fate. There are true events. There are things that happen and things that must happen. And none of us can escape those. We don't have to invent myths to make it all worse. We don't have to invent terrible destinies. We all come to them sure enough.",
    character: "The Eighth Doctor",
    story: "Zagreus"
  },
  {
    text: "Sad is just happy for deep people.",
    character: "Sally Sparrow",
    story: "Blink"
  },
  {
    text: "I say, what a wonderful butler, he's so violent!",
    character: "The Fourth Doctor",
    story: "City of Death"
  },
  {
    text: "First things first, but not necessarily in that order.",
    character: "The Fourth Doctor",
    story: "Meglos"
  },
  {
    text: "The pointing again! They're screwdrivers! What are you going to do, assemble a cabinet at them?",
    character: "The War Doctor",
    story: "The Day of the Doctor"
  },
  {
    text: "I'm nobody's fool. I'm my own fool.",
    character: "Rory Williams",
    story: "The Vampires of Venice"
  },
  {
    text: "If you are the truth, then the truth is terrifying.",
    character: "Davros",
    story: "Journey's End"
  },
  {
    text: "We all have a universe of our own terrors to face.",
    character: "The Seventh Doctor",
    story: "Ghost Light"
  },
  {
    text: "I love humans. Always seeing patterns in things that aren't there.",
    character: "The Eighth Doctor",
    story: "Doctor Who: The Movie"
  },
  {
    text: "Superior intelligence and senseless cruelty just do not go together.",
    character: "The Third Doctor",
    story: "The Mutants"
  },
  {
    text: "You don't need to be extraordinary... you just need to be kind.",
    character: "The Thirteenth Doctor",
    story: "The Tsuranga Conundrum"
  },
  {
    text: "We are all capable of the most incredible change. We can evolve while still staying true to who we are. We can honor who we've been and choose who we want to be next.",
    character: "The Thirteenth Doctor",
    story: "The Woman Who Fell To Earth"
  },
  {
    text: "Fear makes companions of all of us.",
    character: "The First Doctor",
    story: "An Unearthly Child"
  },
  {
    text: "I'm the Doctor. Well, they call me the Doctor. I don't know why. I call me the Doctor too. I still don't know why.",
    character: "The Fourth Doctor",
    story: "The Ribos Operation"
  },
  {
    text: "There is no indignity in being afraid to die, but there is a terrible shame in being afraid to live.",
    character: "The First Doctor",
    story: "The Daleks"
  },
  {
    text: "I just wanted to say, Hello. Hello, Doctor. It's so very very nice to meet you.",
    character: "The TARDIS",
    story: "The Doctor's Wife"
  },
  {
    text: "Oh, marvellous. You're going to kill me. What a finely tuned response to the situation.",
    character: "The Fifth Doctor",
    story: "Frontios"
  },
  {
    text: "My doctorate is purely honorary, and Harry here is only qualified to work on sailors.",
    character: "The Fourth Doctor",
    story: "The Ark in Space"
  },
  {
    text: "Your mind is beginning to work, Harry! It's entirely due to my influence, of course, you mustn't take any credit.",
    character: "The Fourth Doctor",
    story: "Revenge of the Cybermen"
  },
  {
    text: "Time will tell, it always does.",
    character: "The Seventh Doctor",
    story: "Remembrance of the Daleks"
  },
  {
    text: "Harry, call me old girl again and I'll spit in your eye.",
    character: "Sarah Jane Smith",
    story: "Robot"
  },
  {
    text: "What do you know of history, sir? War is coming. In foreign fields, war of the whole wide world, with all your boys falling down in the mud. Do you think they will thank the man who taught them it was glorious?",
    character: "Baines",
    story: "The Family of Blood"
  },
  {
    text: "Do you remember the Zygon gambit with the Loch Ness Monster? Or the Yetis in the Underground? Your species has the most amazing capacity for self-deception, matched by only its ingenuity when trying to destroy itself.",
    character: "The Seventh Doctor",
    story: "Remembrance of the Daleks"
  },
  {
    text: "One may tolerate a world of demons for the sake of an angel.",
    character: "Madame De Pompadour",
    story: "The Girl in the Fireplace"
  },
  {
    text: "It is customary, I think, to have an imaginary friend only during one's childhood. You are to be congratulated on your persistence, Doctor.",
    character: "Madame De Pompadour",
    story: "The Girl in the Fireplace"
  },
  {
    text: "Discussion is for the wise or the helpless, and I am neither.",
    character: "Leela",
    story: "The Invasion of Time"
  },
  {
    text: "I think you should do a scan for alien tech. Give me some Spock for once. Would it kill you?",
    character: "Rose Tyler",
    story: "The Empty Child"
  },
  {
    text: "What is the one thing evil cannot face—not ever? Itself.",
    character: "The Fifth Doctor",
    story: "Kinda"
  },
  {
    text: "There’s always something to look at if you open your eyes!",
    character: "The Fifth Doctor",
    story: "Kinda"
  },
  {
    text: "Time travel is like visiting Paris. You can’t just read the guidebook, you’ve got to throw yourself in. Eat the food, use the wrong verbs, get charged double and end up kissing complete strangers.",
    character: "The Ninth Doctor",
    story: "The Long Game"
  },
  {
    text: "As we learn about each other, so we learn about ourselves.",
    character: "The First Doctor",
    story: "The Edge of Destruction"
  },
  {
    text: "Answers are easy. It’s asking the right questions which is hard.",
    character: "The Fourth Doctor",
    story: "The Face of Evil"
  },
  {
    text: "People who talk about infallibility are usually on very shaky ground.",
    character: "The Third Doctor",
    story: "The Mind of Evil"
  },
  {
    text: "If people see you mean them no harm, they never hurt you—9 times out of 10.",
    character: "The Fourth Doctor",
    story: "The Face of Evil"
  },
  {
    text: "Small though it is, the human brain can be quite effective when working at full efficiency.",
    character: "The Sixth Doctor",
    story: "The Two Doctors"
  },
  {
    text: "You're not my boss. You're one of my hobbies.",
    character: "Clara Oswald",
    story: "Into the Dalek"
  },
  {
    text: "The secret is not just to be stunning, which I find comes rather easily, to be honest. The tricky thing is getting exactly the right level of stun for the occasion.",
    character: "River Song",
    story: "The Angels Take Manhattan"
  },
  {
    text: "Never be certain of anything. It’s a sign of weakness.",
    character: "The Fourth Doctor",
    story: "The Face of Evil"
  },
  {
    text: "Amy Pond, there’s something you’d better understand about me ‘cause it’s important, and one day your life may depend on it: I am definitely a madman with a box!",
    character: "The Eleventh Doctor",
    story: "The Eleventh Hour"
  },
  {
    text: "I don’t know. I can’t tell the future, I just work there.",
    character: "The Eleventh Doctor",
    story: "The Bells of Saint John"
  },
  {
    text: "It is difficult to know what will be a waste of time until after the time has been wasted, by which time it is too late. So predicting what will be a waste of time is something of a waste of time. Unless it gives you pleasure, of course when it probably doesn’t count as a waste of time.",
    character: "The Fourth Doctor",
    story: "Genesis of the Daleks"
  },
  {
    text: "Something pretty bad’s happening nearby in the space-time continuum. The TARDIS is a terrible rubbernecker — like a little old lady, she can’t resist slowing down for a gawp at a car crash in the next lane. Bless.",
    character: "The Tenth Doctor",
    story: "The Runaway Bride"
  },
  {
    text: "My back’s playing up. It simply refuses to carry the weight of an entirely pointless stratum of society who contribute nothing of worth to the world and crush the hopes and dreams of working people.",
    character: "The Twelfth Doctor",
    story: "The Husbands of River Song"
  },
  {
    text: "For some people, small, beautiful events are what life is all about.",
    character: "The Fifth Doctor",
    story: "The Resurrection of the Daleks"
  },
  {
    text: "There’s something that doesn’t make sense. Let’s go and poke it with a stick.",
    character: "The Eleventh Doctor",
    story: "Amy's Choice"
  },
  {
    text: "Jenkins! Chap with the wings there, five rounds rapid",
    character: "The Brigadier",
    story: "The Daemons"
  },
  {
    text: "There is a distinct element of risk in what I'm asking you all to do, so if anyone wishes to leave they must do so at once. Not you, Jamie.",
    character: "The Second Doctor",
    story: "Tomb of the Cybermen"
  },
  {
    text: "DALEKS DO NOT HAVE MANAGERS!",
    character: "A Dalek",
    story: "Eve of the Daleks"
  },
  {
    text: "In 193 years there's a total renegotiation of the human/sheep relationship. Utter bloodbath.",
    character: "The Thirteenth Doctor",
    story: "It Takes You Away"
  }
];

export default quotes;
