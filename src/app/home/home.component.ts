import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nationalNews = [{
    image: 'assets/NationalNews/National_1.jpg',
    thumbImage: 'assets/NationalNews/National_1.jpg',
    title: 'The AstraZeneca vaccine, known as Covishield in India, is produced by the Pune-based Serum Institute of India (SII). The other vaccine available in India is Covaxin, produced by Hyderabad-based Bharat Biotech.'
  },
  {
    video: 'assets/NationalNews/National_4.jpg.mp4',
    title: 'Rahul Gandhi collabration with fisherman in kerala '
  },{
    image: 'assets/NationalNews/National_5.jpg',
    thumbImage: 'assets/NationalNews/National_5.jpg',
    title: 'The Standing Committee on Food, Consumer Affairs and Public Distribution has asked the government to implement in “letter and spirit” the Essential Commodities (Amendment) Act, 2021, one of the three farm laws against which the farmers are protesting at the borders of Delhi for the last 114 days'
  }, {
    image: 'assets/NationalNews/National_6.jpg',
    thumbImage: 'assets/NationalNews/National_6.jpg',
    title: 'Prime Minister Narendra Modi has called a meeting of all chief ministers via video-conferencing over the recent surge in Covid-19 cases across India.'
  }, {
    image: 'assets/NationalNews/National_3.jpg',
    thumbImage: 'assets/NationalNews/National_3.jpg',
    title: 'Finance Minister Nirmala Sitharaman loosened the exchequer’s purse strings and presented an expansionary Budget for 2021-22 on Monday, with a push for infrastructure and health care spending, even as she sought to reduce the fiscal deficit from an estimated 9.5% of GDP this year without ostensibly raising the tax burden.'
  },
  {
    image: 'assets/NationalNews/National_2.jpg',
    thumbImage: 'assets/NationalNews/National_2.jpg',
    title: 'In view of the spike in COVID-19 cases in Pune, the Pune district administration on Sunday extended the night curfew and shutdown of schools till March 14.'
  }];
  stateNews = [{
    image: 'assets/StateNews/State_1.jpg',
    thumbImage: 'assets/StateNews/State_1.jpg',
    title: 'Schools to open after 315-day COVID break Guidelines on safety measures, standard operating procedures likely to be issued after officials’ meeting today    Following Chief Minister K. Chandrasekhar Rao’s direction to open schools and colleges from February 1, officials will be meeting on Tuesday to finalise the guidelines and standard operating procedures to be adopted with regard to classes, teaching and exams.'
  },
{
    image: 'assets/StateNews/state_2.jpg',
    thumbImage: 'assets/StateNews/state_2.jpg',
    title: 'Chief Minister K Chandrasekhar Rao’s strategy to reverse the BJP’s winning streak has worked. His decision to field former Prime Minister late PV Narasimha Rao’s daughter Surabhi Vani Devi and sitting MLC Palla Rajeshwar Reddy for the two Graduate MLC seats in Telangana has sent the saffron party to the cleaners.'
  },  {
    video: 'assets/StateNews/statenewsZomato.mp4',
    title: 'Zomato Guy Denies Assault Charges Asking For His Job Back & Everyones Like Let The Truth Win'
  }, {
    image: 'assets/StateNews/state_3.jpeg',
    thumbImage: 'assets/StateNews/state_3.jpeg',
    title: 'Banks will be closed consecutively for three days from 27-29 March on account of the Second Saturday, Sunday and Holi festival all over India.'
  }, {
    image: 'assets/StateNews/state_4.jpeg',
    thumbImage: 'assets/StateNews/state_4.jpeg',
    title: 'Schools, colleges, educational/training/coaching institutions will remain shut across the state. The list of prohibited activities/businesses or services includes Metro Rail, cinema halls, gymnasiums, swimming pools, entertainment parks, sports complexes, theaters, bars, auditoriums, and assembly halls, etc.'
  },
  {
    image: 'assets/NationalNews/National_2.jpg',
    thumbImage: 'assets/NationalNews/National_2.jpg',
    title: 'In view of the spike in COVID-19 cases in Pune, the Pune district administration on Sunday extended the night curfew and shutdown of schools till March 14.'
  }];
  cityNews = [
    {
      video: 'assets/CityNews/city.mp4',
      title: 'Uddhav Thackeray Hints At Lockdown As Coronavirus Cases Surge In Maharashtra'
    },{
    image: 'assets/CityNews/city_1.jpg',
    thumbImage: 'assets/CityNews/city_1.jpg',
    title: 'Hyderabad isnt just about Charminar or biryani. The city is a perfect blend of traditional and modern, and boasts of top education and civic infrastructure.'
  },{
    image: 'assets/CityNews/city_2.jpg',
    thumbImage: 'assets/CityNews/city_2.jpg',
    title: 'Forest dept to install 40 more solar borewells by March-end.'
  }, {
    image: 'assets/CityNews/city_3.jpg',
    thumbImage: 'assets/CityNews/city_3.jpg',
    title: 'The daunting task for any bachelor living alone in such circumstances was finding ways to fill his tummy as s/he is away from family.'
  }, {
    image: 'assets/CityNews/city_4.jpg',
    thumbImage: 'assets/CityNews/city_4.jpg',
    title: 'This year, the theme of International Day of Forests is “Forest restoration: a path to recovery and well-being”.'
  }];
  sportsNews = [{
    image: 'assets/SportsNews/sports_1.jpeg',
    thumbImage: 'assets/SportsNews/sports_1.jpeg',
    title: 'New York Knicks Patrick Ewing encourages fans to cheer in the final seconds of their playoff game against the Charlotte Hornets in New York, in this Saturday, April 26, 1997, file photo. The Knicks won 100-93.'
  },
  {
    video: 'assets/SportsNews/sports.mp4',
    title: 'P V Sindhu on Sunday became the first Indian to win badminton World Championships gold by beating familiar rival Nozomi Okuhara of Japan in a lop-sided final Basel on Sunday.'
  },{
    image: 'assets/SportsNews/sports_2.jpeg',
    thumbImage: 'assets/SportsNews/sports_2.jpeg',
    title: 'After winning the ODI series in a strong way, the hosts West Indies are now eyeing to start this Test series in a strong way. As the hosts, West Indies are improving in Test cricket too, and they will try their best to improve their recent home Test records too.'
  }, {
    image: 'assets/SportsNews/sports_3.jpeg',
    thumbImage: 'assets/SportsNews/sports_3.jpeg',
    title: 'Twenty MS Dhoni Cricket Academy (MSDCA) and School Sports Development Pathway centres will dot Telangana over the next two years. Brainiacs Bee and Aarka Sports Management Pvt. Ltd. (ASMP) will collaborate to establish the centres, said Mihir Diwakar, MD of ASMP.'
  }, {
    image: 'assets/SportsNews/sports_4.jpeg',
    thumbImage: 'assets/SportsNews/sports_4.jpeg',
    title: 'PV Sindhu crashed out of the All England Championships with a 17-21, 9-21 loss to Pornpawee Chochuwong of Thailand in the semifinals on Saturday. A day after her brilliant show against Akane Yamaguchi of Japan, which she won 16-21, 21-16, 21-19 Sindhu struggled against Pornpawee.'
  }, {
    image: 'assets/SportsNews/sports_5.jpeg',
    thumbImage: 'assets/SportsNews/sports_5.jpeg',
    title: 'India is expected to send a contingent of close to 150 athletes for the Olympics, which were postponed last year after the outbreak of the pandemic.'
  }];

}
