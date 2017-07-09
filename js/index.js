/* 

    Code by Nicholas Brown
    
*/


var quotes = {
1: {name: "David Hume", quote: "A wise man proportions his belief to the evidence."},
2: {name: "Anne Bancroft", quote: "There are always good parts."},
3: {name: "Kabir", quote: "When you were born in this world <br>Everyone laughed while you cried <br>Conduct not yourself in manner such <br>That they laugh when you are gone."},
4: {name: "Fakhruddin 'Iraqi", quote: "All that you see has appeared because of Love.<br>All shines from Love,<br>All pulses with Love,<br>All flows from Love —<br>No, once again, all is Love!"},
5: {name: "Cole Porter", quote: "Be a clown, be a clown,<br>All the world loves a clown.<br>Act the fool, play the calf,<br>And you'll always have the last laugh."},
6: {name: "William Ellery Channing", quote: "Most joyful let the Poet be;<br>It is through him that all men see."},
7: {name: "Pierre Corneille", quote: "I can be forced to live without happiness, but I will never consent to live without honor."},
8: {name: "Lawrence Lessig", quote: "When government disappears, it's not as if paradise will take its place. When governments are gone, other interests will take their place."},
9: {name: "Cornel West", quote: "The capacity to produce social chaos is the last resort of desperate people."},
10: {name: "E. O. Wilson", quote: "We are drowning in information, while starving for wisdom. The world henceforth will be run by synthesizers, people... [who] think critically... and make important choices wisely."},
11: {name: "Mario Cuomo", quote: "I protect my right to be a Catholic by preserving your right to believe as a Jew, a Protestant, or non-believer, or as anything else you choose. We know that the price of seeking to force our beliefs on others is that they might some day force theirs on us."},
12: {name: "Cole Porter", quote: "In olden days a glimpse of stocking <br>Was looked on as something shocking <br>But now, Heaven knows, <br>Anything goes."},
13: {name: "James Joyce in Ulysses", quote: "A man of genius makes no mistakes. His errors are volitional and are the portals to discovery."},
14: {name: "George Orwell", quote: "If liberty means anything at all, it means the right to tell people what they do not want to hear."},
15: {name: "William McFee", quote: "There are some men whom a staggering emotional shock, so far from making them mental invalids for life, seems, on the other hand, to awaken, to galvanize, to arouse into an almost incredible activity of soul."},
16: {name: "Helen Keller", quote: "The bulk of the world’s knowledge is an imaginary construction."},
17: {name: "Carl von Clausewitz", quote: "With uncertainty in one scale, courage and self-confidence should be thrown into the other to correct the balance."},
18: {name: "Sydney Smith", quote: "Have the courage to be ignorant of a great number of things, in order to avoid the calamity of being ignorant of everything."},
19: {name: "Thomas Mann", quote: "Time has no divisions to mark its passage, there is never a thunderstorm or blare of trumpets to announce the beginning of a new month or year. Even when a new century begins it is only we mortals who ring bells and fire off pistols."},
20: {name: "John Wesley", quote: "Think not the bigotry of another is any excuse for your own."},
21: {name: "James P. Hogan", quote: "The lunatics end up in charge of everything. Sane, normal people don't need power trips."},
22: {name: "George Orwell", quote: "Revenge is an act which you want to commit when you are powerless and because you are powerless: as soon as the sense of impotence is removed, the desire evaporates also."},
23: {name: "Isaac Asimov", quote: "It pays to be obvious, especially if you have a reputation for subtlety."},
24: {name: "Zora Neale Hurston", quote: "Love, I find is like singing. Everybody can do enough to satisfy themselves, though it may not impress the neighbors as being very much."},
25: {name: "Gerry Spence", quote: "The people of a nation are enslaved when, together, they are helpless to institute effective change, when the people serve the government more than the government serves them."},
26: {name: "Simone de Beauvoir", quote: "It is for man to establish the reign of liberty in the midst of the world of the given."},
27: {name: "Alexander Hamilton", quote: "When the sword is once drawn, the passions of men observe no bounds of moderation."},
28: {name: "Albert Schweitzer", quote: "The only way out of today's misery is for people to become worthy of each other's trust."},
29: {name: "Robert E. Lee", quote: "It is well that war is so terrible — lest we should grow too fond of it."},
30: {name: "Franklin D. Roosevelt", quote: "The test of our progress is not whether we add more to the abundance of those who have much; it is whether we provide enough for those who have too little."}
};

var tweetlink = "";
var currentQuote = "";
var currentAuthor = "";


 function randomQuote (){

   
  function rando (max, min) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
  var r = rando(30, 1);
  
  currentQuote = quotes[r]["quote"];
  currentAuthor = quotes[r]["name"];
        

$('#content').fadeOut(2000, function() {
  $(".quote").html(currentQuote); 
  $(".author").html(currentAuthor);
  $("#tweetie").attr("href", tweetlink);
  $('#content').fadeIn(2000);
});

   
   tweetlink = ("https://twitter.com/intent/tweet?hashtags=dailyquote&text=" + currentQuote + " " + currentAuthor);
   
   

   
 }

window.onload = randomQuote;

  $("#tweetie").on("click", function(){
      window.open(tweetlink);
    })

//

$(document).ready(function() {
  $(document).on("click", randomQuote);
})

$("#content").hover(
    function(){ 
      $("#lower").fadeTo(850, 1);
    },
    function(){ 
      $("#lower").fadeTo(850, 0.25);
    });
$("#content").hover(
    function(){ 
      $("#upper").fadeTo(850, 0.2);
    },
    function(){ 
      $("#upper").fadeTo(850, 1);
    });