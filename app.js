const jobCardsContainer = document.querySelector('.container');

const jobAnnouncments = [
 {
  image: 'Group1',
  published: '5h ago',
  workingTime: 'Full Time',
  title: 'Senior Software Engineer',
  companyName: 'So Digital Inc.',
  location: 'Remote, Seoul, Tokyo, Mountain View, San Fransisco'
 },
 {
  image: 'Group2',
  published: '20h ago',
  workingTime: 'Part Time',
  title: 'Haskell and PureScript Dev',
  companyName: 'National Wildlife',
  location: 'Columbus, OH'
 },
 {
  image: 'Group3',
  published: '5h ago',
  workingTime: 'Full Time',
  title: 'Haskell and PureScript Dev',
  companyName: 'So Digital Inc.',
  location: 'Remote, Seoul, Tokyo, Mountain View, San Fransisco'
 },
 {
  image: 'Group4',
  published: '5h ago',
  workingTime: 'Full Time',
  title: 'Haskell and PureScript Dev',
  companyName: 'So Digital Inc.',
  location: 'Remote, Seoul, Tokyo, Mountain View, San Fransisco'
 },
 {
  image: 'Group5',
  published: '5h ago',
  workingTime: 'Full Time',
  title: 'Haskell and PureScript Dev',
  companyName: 'So Digital Inc.',
  location: 'Remote, Seoul, Tokyo, Mountain View, San Fransisco'
 },
 {
  image: 'Group6',
  published: '5h ago',
  workingTime: 'Full Time',
  title: 'Haskell and PureScript Dev',
  companyName: 'So Digital Inc.',
  location: 'Remote, Seoul, Tokyo, Mountain View, San Fransisco'
 },
 {
  image: 'Group7',
  published: '5h ago',
  workingTime: 'Full Time',
  title: 'Haskell and PureScript Dev',
  companyName: 'So Digital Inc.',
  location: 'Remote, Seoul, Tokyo, Mountain View, San Fransisco'
 },
 {
  image: 'Group8',
  published: '5h ago',
  workingTime: 'Full Time',
  title: 'Haskell and PureScript Dev',
  companyName: 'So Digital Inc.',
  location: 'Remote, Seoul, Tokyo, Mountain View, San Fransisco'
 },
 {
  image: 'Group9',
  published: '5h ago',
  workingTime: 'Full Time',
  title: 'Haskell and PureScript Dev',
  companyName: 'So Digital Inc.',
  location: 'Remote, Seoul, Tokyo, Mountain View, San Fransisco'
 },
 {
  image: 'Group10',
  published: '5h ago',
  workingTime: 'Full Time',
  title: 'Haskell and PureScript Dev',
  companyName: 'So Digital Inc.',
  location: 'Remote, Seoul, Tokyo, Mountain View, San Fransisco'
 },
 {
  image: 'Group11',
  published: '5h ago',
  workingTime: 'Full Time',
  title: 'Haskell and PureScript Dev',
  companyName: 'So Digital Inc.',
  location: 'Remote, Seoul, Tokyo, Mountain View, San Fransisco'
 },
 {
  image: 'Group12',
  published: '5h ago',
  workingTime: 'Full Time',
  title: 'Haskell and PureScript Dev',
  companyName: 'So Digital Inc.',
  location: 'Remote, Seoul, Tokyo, Mountain View, San Fransisco'
 },
]

jobAnnouncments.forEach(jobAnouncement => {
 const jobCardHTML = `<div class="job-card ">
   <div class="job-card__img">
    <img src="./assets/desktop/${jobAnouncement.image}.svg" alt="">
   </div>
   <div class="job-card__date">
    <span class="job-card__published">5h ago</span>
    <span class="job-card__working-time">Full Time</span>
   </div>
    <h3 class="job-card__title">Senior Software Engineer
    </h3>
   <span class="job-card__company-name">So Digital Inc.</span>
   <p class="job-card__location">Remote, Seoul, Tokyo, Mountain View,
   San Fransisco</p>
  </div>`

  console.log(jobCardHTML);

  jobCardsContainer.insertAdjacentHTML('afterbegin', jobCardHTML);
})