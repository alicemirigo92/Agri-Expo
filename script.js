const hamburger = document.getElementById('hamburger');
const navigation2 = document.getElementById('nav2');
const cross = document.getElementById('close-btn');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navigation2.classList.toggle('active');
});

cross.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navigation2.classList.remove('active');
});

const allSpeakers = [
  {
    name: 'Natalie',
    position: 'Managing Director at Agri Foils',
    image: 'Images/Natelie.jpg',
    bio: 'She is the first female director of Agri Foils. She holds a masters in Tree Planting.',
  },
  {
    name: 'Ajay',
    position: 'Chief Technical Director at Agri Foils',
    image: 'Images/Ajay.jpg',
    bio: 'He pioneered the use of Botan524 to fight moths in wheat. He studied at the Universityu of Birmingham.',
  },
  {
    name: 'Malik',
    position: 'Accountant at Agri Foils',
    image: 'Images/Malik.jpg',
    bio: 'He is responsible for the smooth running of operations at Agri foils. His thesis on financial implications of Climate chenge bore him the 2012 Agri Expo award.',
  },
  {
    name: 'Sofia',
    position: 'Assistant Technical Director at Agri Foils',
    image: 'Images/Sofia.jpg',
    bio: 'She studied at Texas University College, obtaining a degree in Agrinomics. She owns a hacienda where she farms GMO plants.',
  },
  {
    name: 'Surendra',
    position: 'Managing Director at Agri Bots',
    image: 'Images/suredra.jpg',
    bio: 'He created the Gant250 which is a machine used to harvest pineapples. He is regarded as a great inventor.',
  },
  {
    name: 'Mariatu',
    position: 'Chief Technical Director at Agri Bots',
    image: 'Images/Mariatu.jpg',
    bio: 'She has a PhD in Agriculture from Punjab University of Agriculture and Technology. Her publication on negative effects of GMOs was disruptive.',
  },
];
 
const speakers = document.querySelector('#speakers');
 
allSpeakers.forEach((s) => {
    speakers.innerHTML += `<div class="speaker">
                <img class="speaker-img" src="${s.image}" alt="${s.name}" />
                <div class="about-speaker">
                  <h3>${s.name}</h3>
                  <p class="speaker-pos">${s.position}</p>
                  <span class="speaker-sep"></span>
                  <p class="bio">${s.bio}</p>
                </div>
            </div>`
})
console.log(speakers);
