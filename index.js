var readLine=require('readline-sync');
const chalk = require('chalk');
var emoji = require('node-emoji');
var name=readLine.question(chalk.red("What is your name?\n"));
console.log(chalk.cyan("Hello," ,chalk.bold(name.toUpperCase()) , "! Let's have some funnnnn....Choose what you want to play ."+emoji.get('smile')));
var score=0;
var c=readLine.question("\ta.Harry Potter "+emoji.get('sparkles')+"\n\tb.Friends "+emoji.get('two_men_holding_hands')+"\n\tc.Game of Thrones "+emoji.get('crown')+"\n")



var highscores=[{
  "name":"Prakhar",
  "score":10
},
{
  "name":"Avinash",
  "score":8
},
{
  "name":"Pankaj",
  "score":7
}
]
function play(question,answer,options)
{
  var userans=readLine.question(chalk.blue(question)+"\n"+options+"\n")
  if(answer.toUpperCase()==userans.toUpperCase())
  {
    console.log("-----------------------------------------------------------");
    console.log(chalk.bgGreen.black.bold("Bravo ! You are right "+emoji.get('heavy_check_mark')))
    score=score+1;
  }
  else
  {
     console.log(chalk.bgRed.white.bold("Oops ! You are wrong "+emoji.get('x')))
  }
 
  console.log("Your score is "+ score);
  console.log("------------------------------------------------------------");
}

var Harryquestions=[{
"question":"From what King’s Cross platform does the Hogwarts Express leave?",
"answer":"b",
"options":"\ta. Eight and One-quarter\n\tb. Nine and Three-quarters\n\tc. Five and a Half"
},
{
"question":"What is the model of the first broom Harry ever receives?",
"answer":"a",
"options":"\ta. Nimbus 2000\n\tb. Hoover\n\tc. Cleansweep One"
},
{
"question":"What does the spell “Obliviate” do?",
"answer":"c",
"options":"\ta. Destroys objects\n\tb. Sends someone to the nether realm\n\tc. Removes parts of someone’s memory"
},
{
"question":"Who is Harry Potter’s godfather?",
"answer":"b",
"options":"\ta. Robert Pattinson\n\tb. Sirius Black\n\tc. Dumbledore"
},
{
"question":"What is the name of Voldermort’s pet snake?",
"answer":"b",
"options":"\ta. Mrs.Norris\n\tb. Nagini\n\tc. Buckbeak"
},
{
"question":"What is the name of Harry Potter's owl?",
"answer":"b",
"options":"\ta. Scabbers\n\tb. Hedwig\n\tc. Bill"
},
{
"question":"Name the killing curse.",
"answer":"c",
"options":"\ta. Expecto Patronum\n\tb. Expelliarmus\n\tc. Avada Kedavra"
},
{
"question":"What spell would you use to open a door?",
"answer":"b",
"options":"\ta. Lumosn\n\tb. Alohomora\n\tc. Expelliarmus"
},
{
"question":"Who was Harry Potter's first crush?",
"answer":"a",
"options":"\ta. Cho Chang\n\tb. Molly\n\tc. Hermione"
},
{
"question":"Name the tree that Arthur Weasley's flying car crashes into.",
"answer":"a",
"options":"\ta. The whomping willow\n\tb. Bellatrix Lestrange\n\tc. Gringotts Bank"
}
]


var Gotquestions=[{
"question":"Who is the youngest of Ned Stark’s children?",
"answer":"a",
"options":"\ta. Rickon\n\tb. Bran\n\tc. Arya"
},
{
"question":"Who is Jon Snow’s mother?",
"answer":"a",
"options":"\ta. Lyanna Stark\n\tb. Lysa Arryn\n\tc. Cersei Lanniste"
},
{
"question":"What is Sansa Stark's favorite treat?",
"answer":"a",
"options":"\ta. Lemon cakes\n\tb. Honey cakes\n\tc. Apple cranberry crisp"
},
{
"question":"Arya's punishment for stealing from the Many-Face God is:",
"answer":"b",
"options":"\ta. Death\n\tb. Blindnessn\n\tc. Memory Loss"
},
{
"question":"Which former ranger of the Night’s Watch led an army of wildlings as the “King-Beyond-the-Wall”?",
"answer":"b",
"options":"\ta. Tormund Giantsbane\n\tb. Mance Rayder\n\tc. Janos Slynt"
},
{
"question":"What’s the name of the band of assassins that Arya Stark joins in Braavos?",
"answer":"c",
"options":"\ta. Sons of the Harpy\n\tb. Second Sons\n\tc. Faceless Men"
},
{
"question":"Which of the following is not a name of one of Daenerys Targaryen’s dragons?",
"answer":"b",
"options":"\ta. Drogon\n\tb. Balerion\n\tc. Rhaegal"
},
{
"question":"Jamie Lannister has a golden ___.",
"answer":"a",
"options":"\ta. hand\n\tb. sword\n\tc. chariot"
},
{
"question":"The phrase 'Valar Morghulis' or 'all men must die' is usually responded with:",
"answer":"a",
"options":"\ta. Valar Dohaeris or 'all men must serve'\n\tb. Valar Rohnas or 'all men must live'\n\tc. Valar GoGo or 'all men must dance'"
},
{
"question":"Besides dragonglass, what is the only other substance capable of defeating White Walkers?",
"answer":"b",
"options":"\ta. Wildfire\n\tb.  Valyrian Steel\n\tc. Weirwood"
}
]

var Friendquestions=[{
"question":"For a brief amount of time, Joey and Chandler weren't roommates. Who replaces Joey as Chandler's new roommate? ",
"answer":"a",
"options":"\ta. Eddie \n\tb. Drunk Bobby \n\tc. Russ"
},
{
"question":"What did Ross name his white-headed pet capuchin monkey?",
"answer":"b",
"options":"\ta. Marciel \n\tb. Marcel \n\tc. Marcel"
},
{
"question":"How many times has Ross Geller been married and divorced?",
"answer":"c",
"options":"\ta. Married thrice, two divorces, one annulment \n\tb. Married thrice, two divorces and a separation.\n\tc. Married thrice, divorced thrice."
},
{
"question":"Who was Monica’s first kiss?",
"answer":"a",
"options":"\ta. Ross\n\tb. Chandler\n\tc. Pete"
},
{
"question":"How many sisters does Joey have?",
"answer":"b",
"options":"\ta. 6\n\tb. 7\n\tc. 5"
},
{
"question":"What does Chandler’s dad’s job?",
"answer":"a",
"options":"\ta. Drag Queen in Vegas\n\tb. Elvis Impersonator in Vegas\n\tc. Dancer"
},
{
"question":"What is Rachel scared of?",
"answer":"c",
"options":"\ta. Dogs\n\tb. Cockroach\n\tc. Swing"
},
{
"question":"What was the name of Rachel and Ross’ grandmother?",
"answer":"a",
"options":"\ta. Alice\n\tb. Athene\n\tc. Althea"
},
{
"question":"What did Phoebe legally change her name to?",
"answer":"a",
"options":"\ta. Princess Consuela Bananahammock\n\tb. Regina Phalange\n\tc. Hermione"
},
{
"question":"Where did Monica get a pencil stuck when she was 14?",
"answer":"b",
"options":"\ta. Nose\n\tb. Ear\n\tc. Throat"
}
]

if(c.toLowerCase()=='a')
{
  console.log(chalk.red("Let's check if you are a true PotterHead !")+emoji.get('sparkles'))
  questions=Harryquestions;
}
else if(c.toLowerCase()=='b')
{
  console.log(chalk.red("Let's check if you are a true Frienatics !")+emoji.get('two_men_holding_hands'))
  questions=Friendquestions;
}
else if(c.toLowerCase()=='c')
{
  console.log(chalk.red("Let's check if you are a true GOT fan !")+emoji.get('crown'))
  questions=Gotquestions;
}
else{
  questions=[]
  console.log("Wrong Choice");
}
for(var i=0;i<questions.length;i++)
{
  play(questions[i].question,questions[i].answer,questions[i].options)
}
if(score>highscores[1].score)
{
  console.log("Congratulations ! You have just beaten the score of " + highscores[1].name +" and "+highscores[2].name);
}
else if(score>highscores[2].score)
{
  console.log("Congratulations ! You just beat the score of " + highscores[2].name)
}

console.log("Thanks for Playing "+chalk.bold(name)+emoji.get('heart'))