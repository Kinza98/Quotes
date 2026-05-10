document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');

  if (loader) {
    window.addEventListener('load', () => {
      loader.classList.add('opacity-0', 'transition-opacity', 'duration-500');

      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    });
  }
});
const motivationalQuotes = [
  {
    quote: 'Life is really simple, but we insist on making it complicated.',
    author: 'Confucius',
    mood: 'normal',
  },
  {
    quote: 'In the middle of difficulty lies opportunity.',
    author: 'Albert Einstein',
    mood: 'normal',
  },
  {
    quote: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
    mood: 'normal',
  },
  {
    quote:
      'It is during our darkest moments that we must focus to see the light.',
    author: 'Aristotle',
    mood: 'normal',
  },
  {
    quote: 'Do not let what you cannot do interfere with what you can do.',
    author: 'John Wooden',
    mood: 'normal',
  },
  {
    quote:
      'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    author: 'Winston Churchill',
    mood: 'normal',
  },
  {
    quote: 'You have to be a little fearless to pursue your dreams.',
    author: 'Emma Watson',
    mood: 'normal',
  },
  {
    quote:
      'The struggle you’re in today is developing the strength you need for tomorrow.',
    author: 'Robert Downey Jr.',
    mood: 'normal',
  },
  {
    quote: 'Dream as if you’ll live forever, live as if you’ll die today.',
    author: 'James Dean',
    mood: 'normal',
  },
  {
    quote: 'Don’t be afraid to fail. Be afraid not to try.',
    author: 'Michael Jordan',
    mood: 'normal',
  },
  {
    quote: 'You can’t control the waves, but you can learn to surf.',
    author: 'Jon Kabat-Zinn',
    mood: 'normal',
  },
  {
    quote:
      'Your time is limited, so don’t waste it living someone else’s life.',
    author: 'Steve Jobs',
    mood: 'normal',
  },
  {
    quote:
      'Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying, ‘I will try again tomorrow.’',
    author: 'Mary Anne Radmacher',
    mood: 'normal',
  },
  {
    quote:
      'Hardships often prepare ordinary people for an extraordinary destiny.',
    author: 'C.S. Lewis',
    mood: 'normal',
  },
  {
    quote:
      'Life is not about waiting for the storm to pass, but learning to dance in the rain.',
    author: 'Vivian Greene',
    mood: 'happy',
  },
  {
    quote:
      'Happiness is not something ready-made. It comes from your own actions.',
    author: 'Dalai Lama',
    mood: 'happy',
  },
  {
    quote:
      'Count your age by friends, not years. Count your life by smiles, not tears.',
    author: 'John Lennon',
    mood: 'happy',
  },
  {
    quote: 'The purpose of our lives is to be happy.',
    author: 'Dalai Lama',
    mood: 'happy',
  },
  {
    quote: 'Smile, breathe and go slowly.',
    author: 'Thich Nhat Hanh',
    mood: 'happy',
  },
  {
    quote: 'A day without laughter is a day wasted.',
    author: 'Charlie Chaplin',
    mood: 'happy',
  },
  {
    quote: 'Be happy for this moment. This moment is your life.',
    author: 'Omar Khayyam',
    mood: 'happy',
  },
  {
    quote: 'Happiness depends upon ourselves.',
    author: 'Aristotle',
    mood: 'happy',
  },
  {
    quote: 'Joy is not in things; it is in us.',
    author: 'Richard Wagner',
    mood: 'happy',
  },
  {
    quote: 'Do more of what makes you happy.',
    author: 'Unknown',
    mood: 'happy',
  },
  {
    quote: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
    mood: 'motivated',
  },
  {
    quote: 'Don’t be afraid to fail. Be afraid not to try.',
    author: 'Michael Jordan',
    mood: 'motivated',
  },
  {
    quote: 'Act as if what you do makes a difference. It does.',
    author: 'William James',
    mood: 'motivated',
  },
  {
    quote: 'Do what you can, with what you have, where you are.',
    author: 'Theodore Roosevelt',
    mood: 'motivated',
  },
  {
    quote: 'You have to be a little fearless to pursue your dreams.',
    author: 'Emma Watson',
    mood: 'motivated',
  },
  {
    quote: 'Believe you can and you’re halfway there.',
    author: 'Theodore Roosevelt',
    mood: 'motivated',
  },
  {
    quote: 'Push yourself, because no one else is going to do it for you.',
    author: 'Unknown',
    mood: 'motivated',
  },
  {
    quote: 'Don’t watch the clock; do what it does. Keep going.',
    author: 'Sam Levenson',
    mood: 'motivated',
  },
  {
    quote: 'Great things never come from comfort zones.',
    author: 'Unknown',
    mood: 'motivated',
  },
  {
    quote: 'Dream big and dare to fail.',
    author: 'Norman Vaughan',
    mood: 'motivated',
  },
  {
    quote:
      'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    author: 'Winston Churchill',
    mood: 'resilient',
  },
  {
    quote:
      'Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying, “I will try again tomorrow.”',
    author: 'Mary Anne Radmacher',
    mood: 'resilient',
  },
  {
    quote:
      'The struggle you’re in today is developing the strength you need for tomorrow.',
    author: 'Robert Downey Jr.',
    mood: 'resilient',
  },
  {
    quote:
      'Hardships often prepare ordinary people for an extraordinary destiny.',
    author: 'C.S. Lewis',
    mood: 'resilient',
  },
  {
    quote: 'Fall seven times and stand up eight.',
    author: 'Japanese Proverb',
    mood: 'resilient',
  },
  {
    quote: 'When you come to the end of your rope, tie a knot and hang on.',
    author: 'Franklin D. Roosevelt',
    mood: 'resilient',
  },
  {
    quote:
      'Strength grows in the moments when you think you can’t go on but you keep going anyway.',
    author: 'Unknown',
    mood: 'resilient',
  },
  {
    quote: 'Difficulties strengthen the mind, as labor does the body.',
    author: 'Seneca',
    mood: 'resilient',
  },
  {
    quote:
      'We must accept finite disappointment, but never lose infinite hope.',
    author: 'Martin Luther King Jr.',
    mood: 'resilient',
  },
  {
    quote: 'Tough times never last, but tough people do.',
    author: 'Robert H. Schuller',
    mood: 'resilient',
  },
  {
    quote:
      'It is during our darkest moments that we must focus to see the light.',
    author: 'Aristotle',
    mood: 'inspired',
  },
  {
    quote: 'In the middle of difficulty lies opportunity.',
    author: 'Albert Einstein',
    mood: 'inspired',
  },
  {
    quote: 'The best way to predict the future is to create it.',
    author: 'Peter Drucker',
    mood: 'inspired',
  },
  {
    quote:
      'Your time is limited, so don’t waste it living someone else’s life.',
    author: 'Steve Jobs',
    mood: 'inspired',
  },
  {
    quote:
      'Do not wait to strike till the iron is hot, but make it hot by striking.',
    author: 'William Butler Yeats',
    mood: 'inspired',
  },
  {
    quote: 'Success is not in what you have, but who you are.',
    author: 'Bo Bennett',
    mood: 'inspired',
  },
  {
    quote: 'Change your thoughts and you change your world.',
    author: 'Norman Vincent Peale',
    mood: 'inspired',
  },
  {
    quote:
      'Happiness is not something ready-made. It comes from your own actions.',
    author: 'Dalai Lama',
    mood: 'inspired',
  },
  {
    quote: 'Be yourself; everyone else is already taken.',
    author: 'Oscar Wilde',
    mood: 'inspired',
  },
  {
    quote:
      'What you do makes a difference, and you have to decide what kind of difference you want to make.',
    author: 'Jane Goodall',
    mood: 'inspired',
  },
  {
    quote:
      'The struggle you’re in today is developing the strength you need for tomorrow.',
    author: 'Robert Downey Jr.',
    mood: 'hopeful',
  },
  {
    quote:
      'Hardships often prepare ordinary people for an extraordinary destiny.',
    author: 'C.S. Lewis',
    mood: 'hopeful',
  },
  {
    quote:
      'We must accept finite disappointment, but never lose infinite hope.',
    author: 'Martin Luther King Jr.',
    mood: 'hopeful',
  },
  {
    quote:
      'Keep your face always toward the sunshine—and shadows will fall behind you.',
    author: 'Walt Whitman',
    mood: 'hopeful',
  },
  {
    quote:
      'Every day may not be good... but there is something good in every day.',
    author: 'Alice Morse Earle',
    mood: 'hopeful',
  },
  {
    quote:
      'Hope is being able to see that there is light despite all of the darkness.',
    author: 'Desmond Tutu',
    mood: 'hopeful',
  },
  {
    quote: 'Even the darkest night will end and the sun will rise.',
    author: 'Victor Hugo',
    mood: 'hopeful',
  },
  {
    quote: 'Stars can’t shine without darkness.',
    author: 'Unknown',
    mood: 'hopeful',
  },
  {
    quote: 'Every moment is a fresh beginning.',
    author: 'T.S. Eliot',
    mood: 'hopeful',
  },
  {
    quote: 'Start where you are. Use what you have. Do what you can.',
    author: 'Arthur Ashe',
    mood: 'hopeful',
  },
  {
    quote: 'You have to be a little fearless to pursue your dreams.',
    author: 'Emma Watson',
    mood: 'brave',
  },
  {
    quote:
      'Courage is not the absence of fear, but rather the judgement that something else is more important than fear.',
    author: 'Ambrose Redmoon',
    mood: 'brave',
  },
  {
    quote: 'Do one thing every day that scares you.',
    author: 'Eleanor Roosevelt',
    mood: 'brave',
  },
  {
    quote: 'It takes courage to grow up and become who you really are.',
    author: 'E.E. Cummings',
    mood: 'brave',
  },
  {
    quote: 'Bravery is being the only one who knows you’re afraid.',
    author: 'Franklin P. Jones',
    mood: 'brave',
  },
  {
    quote: 'Fortune favors the brave.',
    author: 'Virgil',
    mood: 'brave',
  },
  {
    quote: 'Life shrinks or expands in proportion to one’s courage.',
    author: 'Anaïs Nin',
    mood: 'brave',
  },
  {
    quote:
      'Courage is resistance to fear, mastery of fear, not absence of fear.',
    author: 'Mark Twain',
    mood: 'brave',
  },
  {
    quote:
      'The secret to happiness is freedom… And the secret to freedom is courage.',
    author: 'Thucydides',
    mood: 'brave',
  },
  {
    quote:
      'You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face.',
    author: 'Eleanor Roosevelt',
    mood: 'brave',
  },
  {
    quote: 'You can’t control the waves, but you can learn to surf.',
    author: 'Jon Kabat-Zinn',
    mood: 'calm',
  },
  {
    quote: 'Peace comes from within. Do not seek it without.',
    author: 'Buddha',
    mood: 'calm',
  },
  {
    quote:
      'The greatest weapon against stress is our ability to choose one thought over another.',
    author: 'William James',
    mood: 'calm',
  },
  {
    quote:
      'Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.',
    author: 'Buddha',
    mood: 'calm',
  },
  {
    quote: 'Smile, breathe, and go slowly.',
    author: 'Thich Nhat Hanh',
    mood: 'calm',
  },
  {
    quote: 'Nothing can bring you peace but yourself.',
    author: 'Ralph Waldo Emerson',
    mood: 'calm',
  },
  {
    quote: 'Simplicity is the ultimate sophistication.',
    author: 'Leonardo da Vinci',
    mood: 'calm',
  },
  {
    quote: 'Be still, and know that I am God.',
    author: 'Psalm 46:10',
    mood: 'calm',
  },
  {
    quote:
      'Set peace of mind as your highest goal, and organize your life around it.',
    author: 'Brian Tracy',
    mood: 'calm',
  },
  {
    quote: 'Calm mind brings inner strength and self-confidence.',
    author: 'Dalai Lama',
    mood: 'calm',
  },
  {
    quote: 'Believe you can and you’re halfway there.',
    author: 'Theodore Roosevelt',
    mood: 'confident',
  },
  {
    quote: 'Self-confidence is the first requisite to great undertakings.',
    author: 'Samuel Johnson',
    mood: 'confident',
  },
  {
    quote:
      'With realization of one’s own potential and self-confidence in one’s ability, one can build a better world.',
    author: 'Dalai Lama',
    mood: 'confident',
  },
  {
    quote:
      'Confidence comes not from always being right but from not fearing to be wrong.',
    author: 'Peter T. Mcintyre',
    mood: 'confident',
  },
  {
    quote: 'You are stronger than you think.',
    author: 'Unknown',
    mood: 'confident',
  },
  {
    quote: 'Optimism is the faith that leads to achievement.',
    author: 'Helen Keller',
    mood: 'confident',
  },
  {
    quote:
      'Nothing can stop the person with the right mental attitude from achieving their goal.',
    author: 'Thomas Jefferson',
    mood: 'confident',
  },
  {
    quote: 'Confidence is preparation. Everything else is beyond your control.',
    author: 'Richard Kline',
    mood: 'confident',
  },
  {
    quote:
      'Don’t wait until everything is just right. It will never be perfect.',
    author: 'Napoleon Hill',
    mood: 'confident',
  },
  {
    quote: 'Go confidently in the direction of your dreams.',
    author: 'Henry David Thoreau',
    mood: 'confident',
  },
  {
    quote: 'Dream as if you’ll live forever, live as if you’ll die today.',
    author: 'James Dean',
    mood: 'adventurous',
  },
  {
    quote: 'Life is either a daring adventure or nothing at all.',
    author: 'Helen Keller',
    mood: 'adventurous',
  },
  {
    quote: 'Adventure may hurt you, but monotony will kill you.',
    author: 'Unknown',
    mood: 'adventurous',
  },
  {
    quote:
      'The biggest adventure you can take is to live the life of your dreams.',
    author: 'Oprah Winfrey',
    mood: 'adventurous',
  },
  {
    quote: 'Jobs fill your pocket, adventures fill your soul.',
    author: 'Jaime Lyn Beatty',
    mood: 'adventurous',
  },
  {
    quote:
      'Do not follow where the path may lead. Go instead where there is no path and leave a trail.',
    author: 'Ralph Waldo Emerson',
    mood: 'adventurous',
  },
  {
    quote:
      'Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did do.',
    author: 'Mark Twain',
    mood: 'adventurous',
  },
  {
    quote: 'To travel is to live.',
    author: 'Hans Christian Andersen',
    mood: 'adventurous',
  },
  {
    quote: 'Say yes, and you will figure it out afterward.',
    author: 'Tina Fey',
    mood: 'adventurous',
  },
  {
    quote: 'Life begins at the end of your comfort zone.',
    author: 'Neale Donald Walsch',
    mood: 'adventurous',
  },
  {
    quote: 'Do what you can, with what you have, where you are.',
    author: 'Theodore Roosevelt',
    mood: 'practical',
  },
  {
    quote: 'Don’t watch the clock; do what it does. Keep going.',
    author: 'Sam Levenson',
    mood: 'practical',
  },
  {
    quote: 'Plan your work for today and every day, then work your plan.',
    author: 'Margaret Thatcher',
    mood: 'practical',
  },
  {
    quote: 'Well done is better than well said.',
    author: 'Benjamin Franklin',
    mood: 'practical',
  },
  {
    quote: 'An investment in knowledge pays the best interest.',
    author: 'Benjamin Franklin',
    mood: 'practical',
  },
  {
    quote: 'Start where you are. Use what you have. Do what you can.',
    author: 'Arthur Ashe',
    mood: 'practical',
  },
  {
    quote: 'Little by little, one travels far.',
    author: 'J.R.R. Tolkien',
    mood: 'practical',
  },
  {
    quote: 'It always seems impossible until it’s done.',
    author: 'Nelson Mandela',
    mood: 'practical',
  },
  {
    quote:
      'Success usually comes to those who are too busy to be looking for it.',
    author: 'Henry David Thoreau',
    mood: 'practical',
  },
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney',
    mood: 'practical',
  },
  {
    quote:
      'Even a happy life cannot be without a measure of darkness. Keep moving forward.',
    author: 'Carl Jung',
    mood: 'sad',
  },
  {
    quote: 'Tears are words the heart can’t express. Let them out and heal.',
    author: 'Unknown',
    mood: 'sad',
  },
  {
    quote: 'Every setback is a setup for a comeback.',
    author: 'T.D. Jakes',
    mood: 'sad',
  },
  {
    quote: 'Pain is temporary. Growth is permanent.',
    author: 'Unknown',
    mood: 'sad',
  },
  {
    quote: 'Storms make trees take deeper roots.',
    author: 'Dolly Parton',
    mood: 'sad',
  },
  {
    quote: 'Sadness is part of life, but so is hope.',
    author: 'Unknown',
    mood: 'sad',
  },
  {
    quote: 'Keep your head up. The sun will shine again.',
    author: 'Unknown',
    mood: 'sad',
  },
  {
    quote: 'It’s okay to feel sad. Just don’t stay there forever.',
    author: 'Unknown',
    mood: 'sad',
  },
  {
    quote:
      'Sometimes when things are falling apart, they may actually be falling into place.',
    author: 'Unknown',
    mood: 'sad',
  },
  {
    quote: 'This too shall pass.',
    author: 'Persian Proverb',
    mood: 'sad',
  },
  {
    quote: 'Do not let your worries control you; focus on what you can change.',
    author: 'Unknown',
    mood: 'anxious',
  },
  {
    quote: 'Take a deep breath. You are stronger than your fears.',
    author: 'Unknown',
    mood: 'anxious',
  },
  {
    quote:
      'Worrying does not take away tomorrow’s troubles. It takes away today’s peace.',
    author: 'Unknown',
    mood: 'anxious',
  },
  {
    quote:
      'One small positive thought in the morning can change your whole day.',
    author: 'Unknown',
    mood: 'anxious',
  },
  {
    quote: 'Anxiety is temporary. Calm is always within reach.',
    author: 'Unknown',
    mood: 'anxious',
  },
  {
    quote:
      'Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure.',
    author: 'Oprah Winfrey',
    mood: 'anxious',
  },
  {
    quote:
      'You don’t have to control your thoughts. You just have to stop letting them control you.',
    author: 'Dan Millman',
    mood: 'anxious',
  },
  {
    quote: 'Rule your mind or it will rule you.',
    author: 'Horace',
    mood: 'anxious',
  },
  {
    quote: 'Nothing in life is to be feared; it is only to be understood.',
    author: 'Marie Curie',
    mood: 'anxious',
  },
  {
    quote:
      'Worry often gives a small thing a big shadow. Focus on what’s real.',
    author: 'Swedish Proverb',
    mood: 'anxious',
  },
  {
    quote:
      'For every minute you are angry you lose sixty seconds of happiness.',
    author: 'Ralph Waldo Emerson',
    mood: 'angry',
  },
  {
    quote:
      'Holding onto anger is like grasping a hot coal. Let it go and you will heal.',
    author: 'Buddha',
    mood: 'angry',
  },
  {
    quote:
      'Speak when you are angry and you will make the best speech you will ever regret.',
    author: 'Ambrose Bierce',
    mood: 'angry',
  },
  {
    quote: 'Anger dwells only in the bosom of fools. Calm your mind.',
    author: 'Albert Einstein',
    mood: 'angry',
  },
  {
    quote:
      'Bitterness is like cancer. It eats upon the host. Forgive and be free.',
    author: 'Maya Angelou',
    mood: 'angry',
  },
  {
    quote: 'Anger is a short madness. Take a breath.',
    author: 'Horace',
    mood: 'angry',
  },
  {
    quote:
      'Never respond to an angry person with a fiery comeback. Respond with calm.',
    author: 'Lao Tzu',
    mood: 'angry',
  },
  {
    quote: 'Anger makes you smaller, while forgiveness forces you to grow.',
    author: 'Cherie Carter-Scott',
    mood: 'angry',
  },
  {
    quote: 'When angry, count ten before you speak; if very angry, a hundred.',
    author: 'Thomas Jefferson',
    mood: 'angry',
  },
  {
    quote: 'Let go of anger and embrace peace.',
    author: 'Unknown',
    mood: 'angry',
  },
];

let quoteMood = '';
let quoteEl = document.getElementById('quote');
let authorEl = document.getElementById('author');

let currentNum = Math.floor(Math.random() * motivationalQuotes.length);
document.getElementById('quote').innerText =
  motivationalQuotes[currentNum].quote;
document.getElementById('author').innerText =
  '— ' + motivationalQuotes[currentNum].author;

function showQuote(index) {
  // Fade out + slide up current quote
  quoteEl.classList.add('opacity-0', '-translate-y-4');
  authorEl.classList.add('opacity-0', '-translate-y-4');

  // Wait for transition to finish (500ms matches Tailwind duration-500)
  setTimeout(() => {
    // Change the text
    quoteEl.innerText = motivationalQuotes[index].quote;
    authorEl.innerText = '— ' + motivationalQuotes[index].author;

    // Fade in + reset position
    quoteEl.classList.remove('opacity-0', '-translate-y-4');
    authorEl.classList.remove('opacity-0', '-translate-y-4');
  }, 200);
}

// Update button click
document.getElementById('changeQuote').addEventListener('click', () => {
  if (quoteMood !== '') {
    do {
      currentNum = (currentNum + 1) % motivationalQuotes.length;
    } while (motivationalQuotes[currentNum].mood !== quoteMood);
  } else {
    currentNum = (currentNum + 1) % motivationalQuotes.length;
  }
  showQuote(currentNum);
});

function changeMood(mood) {
  console.log(mood);
  quoteMood = mood;
  do {
    currentNum = (currentNum + 1) % motivationalQuotes.length;
  } while (motivationalQuotes[currentNum].mood !== mood);
  showQuote(currentNum);
  document.getElementById('quoteHome').setAttribute('data-mood', mood);
}
