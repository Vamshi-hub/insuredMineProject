import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
src='assets/PrivateNews';
  constructor() { }

  ngOnInit(): void {
  }
  allimages = [{
    image: this.src+'/private_20.jpeg',
    title:'A Bandra District Consumer Disputes Redressal Commission has dismissed a complaint of a Borivali resident against telecom service provider Vodafone India in which he had complained of inflated international roaming charges.'
  },{
    image: this.src+'/private_8.jpeg',
    title:'Bengaluru police have reportedly decided to stop the investigation into the alleged assault case of Zomoto delivery boy Kamaraj after not finding any evidence in the matter. Cops said the claimant, Hitesha Chandranee, who accused the Zomato delivery man of attacking her over alleged delayed service, was also not cooperating with them.'
  },{
    image: this.src+'/private_2.jpeg',
    title:'TWO HELD FOR PRINTING FAKE NOTES IN UPS BULANDSHAHR A team of the crime branch arrested two people for allegedly printing fake notes and recovered the machine used for it, police said in Saturday.'
  }, {
    image: this.src+'/private_3.jpeg',
    title:'Punjab reports 2587 new Covid-19 cases and 28 deaths in the last 24 hours. Total number of cases rises to 2,10,466, death toll stands at 6,280.'
  }, {
    image: this.src+'/private_4.jpeg',
    title:'The Centre on Monday accused Jharkhand government of using the environment as a ruse to attempt stalling auction of 41 coal mines, nine of which are located in the tribal state, for commercial exploitation and assured the Supreme Court that these do not fall in eco-sensitive zones.'
  },
  {
    image: this.src+'/private_5.jpeg',
    title:'Though India is home to just 1 per cent of the worlds vehicles, we still account for 11 per cent of the global road accident deaths -- the highest in the world.'
  },
  {
    image: this.src+'/private_6.jpeg',
    title:'OnePlus is set to launch its first smartwatch, dubbed OnePlus Watch . The company has been teasing the upcoming smartwatch since months now. Heres a roundup of all the speculations about the long-awaited first smartwatch from the company.'
  },
  {
    image: this.src+'/private_7.jpeg',
    title:'The Delhi High Court on Monday stayed a single judges order restraining Future Retail Ltd from going ahead with its Rs 24,713 crore deal with Reliance Retail to sell its business, which was objected to by US-based e-commerce giant Amazon.'
  },
  {
    image: this.src+'/private_9.jpg',
    title:'Salaried investors in the highest tax bracket looking for an alternative to Voluntary Provident Fund could consider Nippon India Mutual Fund’s Lakhshya Nivesh Fund.'
  },
  {
    image: this.src+'/private_10.jpeg',
    title:'If your Permanent Account Number is not linked to your Aadhaar card, your PAN card will turn useless from next month. The Central government had extended the deadline to link PAN with Aadhaar several times. Unless the government extends the deadline again, the last date to link the documents is 31 March 2021.'
  },
  {
    image: this.src+'/private_11.jpg',
    title:'The Central Bureau of Investigation (CBI) is conducting searches on the premises of three officials of the Securities and Exchange Board of India (SEBI) in connection with the Saradha Ponzi scam case.'
  },
  {
    image: this.src+'/private_12.jpeg',
    title:'Sensex off day’s low, but still in red, Nifty above 14,650 in volatile trade; RIL, HDFC Bank drag.'
  },
  {
    image: this.src+'/private_13.jpeg',
    title:'Stocks edged lower with U.S. equity futures on Monday, though technology shares outperformed as Treasury yields retreated from recent highs. Turkey’s lira tumbled after the country’s central bank governor was ousted.'
  },
  {
    image: this.src+'/private_14.jpeg',
    title:'At least three people were killed when an inebriated 18-year-old rammed his Mercedes into a taxi after jumping a red light in Mohali and hit two cyclists.'
  },
  {
    image: this.src+'/private_15.jpeg',
    title:'Coronavirus | Centre warns of ‘upsurge’ following Kumbh Mela at Haridwar.'
  },
  {
    image: this.src+'/private_16.jpeg',
    title:'Modi’s India proves that liberal economics can happily coexist with political illiberalism.'
  },
  {
    image: this.src+'/private_17.jpeg',
    title:'Balakot Anniversary: IAF Squadron That Conducted Air Attacks Makes Long-range Practice Strike | WATCH Video, Photos.'
  },
  {
    image: this.src+'/private_18.jpeg',
    title:'Pakistan’s powerful army chief General Qamar Javed Bajwa asked India “to bury the past and move forward,” in rare comments that came a day after Prime Minister Imran Khan urged New Delhi to move toward peace by resolving issues around the Kashmir region.'
  },
  {
    image: this.src+'/private_19.jpeg',
    title:'As most sectoral indices ended in the red last week, the Nifty FMCG gauge shot up 2.9 per cent with investors choosing to rely more on defensives after benchmarks fell for five straight days before roaring back on Friday.'
  },
  {
    image: this.src+'/private_1.jpeg',
    title:'A speeding Mercedes car killed three people in Punjabs Mohali yesterday. The driver of the car arrested by police.'
  }];
}
