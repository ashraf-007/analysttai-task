import clock from './images/clock.png'
import gps from './images/gps.png'
import login from './images/login.png'
import multi from './images/multi.png'
import intelligent from './images/most-intelligent.png'
import recruiting from './images/recruiting.svg'
import sales from './images/sales.svg'
import marketing from './images/marketing.svg'
import more from './images/more.svg'
import vertical from './images/vertical.svg'
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.png'
import img5 from './images/5.png'
import img6 from './images/6.png'
import left1 from './images/left1.png'
import left2 from './images/left2.png'
import right1 from './images/right1.png'
import right2 from './images/right2.png'


const spendData = [ {
id:1,
title : 'Searching by',
elements :[ 'A specific company criteria (eg: Semiconductor, mumbai, Managers, >200 Employees)' ,
 'Training individual name(eg: "Bill Gates")' ,
  ' Bulk upload contact or name sheet via excel' ,
  'Any other customized requirement (Applicable for gold & enterprice packages']
},
{
    id:1,
    title : 'Fetch Contact Data',
    elements :[ 'Of likers, commentors & group members of Facebook' ,
     'Of likers & followers on Instagram' ,
      'Of followers on Twitter' ,
      'Of people who have searched a keyword on Twitter' ,
    'Of likers, commentors & group members of LinkedIn']
    
    },
    {
        id:1,
        title : 'Getting Data of',
        elements :[ 'Real-Time MCA register companies' ,
         'Newly Funded Startups' ,
          'Naukri & Monster Job Postings' ,
          'Contact data of PE/VCs & Angel Investors']
        
        },
        {
            id:1,
            title : 'Integration',
            elements :['API',
             'Chrome Extension' ,
              ' Bulk upload contact or name sheet via excelCRM Platform'
        ]
            } ]
const pricingData = [{
    id:1 , 
   label: 'Monthly',
   data : [{
       title : 'What You Get',
       d1 : 'Comprehensive Person Profile/Month (Phone Number Included)',
       d2:'Email IDs/Month',
       d3 :'Excel Data Export',
       price :'Price Per Year',
       buy:false
   },
   {
       title : 'Standard',
       d1 : '150 Credits',
       d2 :'600 Credits',
       d3:'Yes',
       price :'Rs. 7,500',
       buy:'Buy Now'
   },
   {
       title : 'Starter',
       d1 : '375 Credits',
       d2:'1,500 Credits',
       d3:'Yes',
       price :'Rs. 15,000',
       buy:'Buy Now'

   },
   {
       title : 'Growth',
       d1 : '850 Credits',
       d2:'3,000 Credits',
       d3:'Yes',
       price :'Rs. 30,000',
       buy:'Buy Now'

   },
   {
       title : 'Enterprise',
       d1 : 'Customize Credits',
       d2:'Customize Credits',
       d3:'Yes',
       price :'CUSTOMIZE',
       buy:'Get a Quote'

   }
]
},{ 
id:2 , 
   label: 'Annualy',
   data : [{
    title : 'What You Get',
    d1 : 'Comprehensive Person Profile/Month (Phone Number Included)',
    d2:'Email IDs/Month',
    d3 :'Excel Data Export',
    price :'Price Per Year',
    buy:false
},
{
    title : 'Standard',
    d1 : '150 Credits/Month',
    d2 :'600 Credits/Month',
    d3:'Yes',
    price :'Rs. 63,000',
    buy:'Buy Now'
},
{
    title : 'Starter',
    d1 : '375 Credits/Month',
    d2:'1,500 Credits/Month',
    d3:'Yes',
    price :'Rs. 1,26,000',
    buy:'Buy Now'

},
{
    title : 'Growth',
    d1 : '850 Credits/Month',
    d2:'3,000 Credits/Month',
    d3:'Yes',
    price :'Rs. 1,26,000',
    buy:'Buy Now'

},
{
    title : 'Enterprise',
    d1 : 'Customize Credits/Month',
    d2:'Customize Credits/Month',
    d3:'Yes',
    price :'CUSTOMIZE',
    buy:'Get a Quote'
}
]
}, ]
const features = [ {
    id:1 ,
    text: 'Real Time Lead',
    icon : clock

},
{
    id:2 ,
    text: 'Criteria Based Searches',
    icon: login
   
},{
    id:3 ,
    text: ' Accurate & Verified Data',
    icon:gps
   
}
]
const s2Infos = [ {
    id:1 ,
    title :'Find Exactly what are you looking for',
    text: 'Real Time Lead',
    videoSource :"https://leadzen.ai/wp-content/uploads/2021/07/enrich-your-data.webm"

},
{
    id:2 ,
    title :'Get Real Time Leads',
    text: 'From potential customers and talented recruits to a competitive marketing edge, our AI powered engine collects and sends you data for all your business needs. ',
    videoSource :"https://leadzen.ai/wp-content/uploads/2021/07/we-get-what-you-mean-NLP.webm"

},
{
    id:3 ,
    title :'Know your prospects better',
    text: 'Get access to their phone numbers, work email IDs, social media links, demographics and interests so your next conversation is smoother than ever. ',
    videoSource :"https://leadzen.ai/wp-content/uploads/2021/07/Know-your-prospects.webm"

},
{
    id:4 ,
    title :'Make Criteria Based Research',
    text: 'Narrow down your target audience to those that are the perfect fit. With LeadZen.ai, you can search for viable prospects through parameters such as designation, industry, education, company, income group, geography, age, gender and much more. ',
    videoSource :"https://leadzen.ai/wp-content/uploads/2021/07/Make-criteria-based-searches.webm"
},
{
    id:5 ,
    title :'Enrich Your Data CPM',
    text: 'No more cold calls and wrong numbers. Simply bulk upload your existing customer database and get their latest contact numbers, email IDs, designations and other important information.',
    videoSource :"https://leadzen.ai/wp-content/uploads/2021/07/enrich-your-data.webm"

}
]

const helpInfos = [{
    id:1,
    heading:'Leadzen.ai Can Help You',
    title:'Break your sales record',
    text : 'Instantly find your next loyal customer and boost your company’s sales by getting top leads across various sectors.',
    image :sales,
    video :false,
    secondaryImages : false,
    label : 'Sales'

},
{
    id:2,
    heading:'Leadzen.ai Can Help You',
    title:'Build your brand',
    text : 'Use hyper targeted marketing and leverage your competition’s content to gain access to new target audiences.',
    image : marketing,
    video :false,
    secondaryImages : false,
    label : 'Marketing'


},
{
    id:3,
    heading:'Leadzen.ai Can Help You',
    title:'Bring in the best talent',
    text : 'Directly target industry professionals and hire only the most suitable talent for your team.',
    image : recruiting,
    video :false,
    secondaryImages : false,
    label : 'Talent Acquisition'

},
{
    id:4,
    heading:'Leadzen.ai Can Help You',
    title:'Do much more',
    text : 'From skip tracing and identity resolution to due diligence, Lead-gen offers accurate, real-time data to meet all of your business needs.',
    image : more,
    video :false,
    secondaryImages : false,
    label : 'More...'
},
{
    id:5,
    heading:'We Get What You Mean',
    title:false,
    text : 'Our NLP (Natural Language Processing) based AI engine understands queries, statements and keywords to provide you with the specific datasets you are looking for.',
    image : false,
    video :"https://leadzen.ai/wp-content/uploads/2021/07/we-get-what-you-mean-NLP.webm",
    secondaryImages : [ left1 , left2 , right1 , right2],
    vertical : vertical


},

{
    id:7,
    heading:'LeadZen.ai Recommends',
    title:false,
    text : 'Based on searches you have made in the past, our smart data model learns exactly what you’re looking for and recommends only the most relevant leads to help your business prosper.',
    image : intelligent,
    video :false,
    secondaryImages : false

},
{
    id:8,
    heading:'Chrome Extension',
    title:false,
    text : "While you're on a potential customer's website, get their data in one click",
    image :false,
    video :false,
    span: 'Coming Soon ...',
    secondaryImages : false

},
{
    id:9,
    heading:'Turn Browsing into Lead Generation',
    title:false,
    text : "We’re constantly working, even when you aren’t. Our AI based engine continuously scours through 100s of data sources to generate quality leads, all while you browse at your leisure.",
    image :multi,
    video :false,
    // span: 'Coming Soon ...',
    secondaryImages : false,
    vertical : vertical

}
 ]

const trusted = [ {
    id:1,
    src : img1
},
{
    id:2,
    src : img2
}, {
    id:3,
    src : img3
}, {
    id:4,
    src : img4
}, {
    id:5,
    src : img5
}, {
    id:6,
    src : img6
}


]

const column1 =[{
    id:1,
    text : 'Why us'
},
{
    id:2,
    text : 'Pricing'
},{
    id:3,
    text : 'Contact us'
},{
    id:4,
    text : 'Book a demo'
}
 ]
 const column2 =[{
    id:1,
    text : 'Sales'
},
{
    id:2,
    text : 'Marketing'
},{
    id:3,
    text : 'Talent Acquisition'
},{
    id:4,
    text : 'So much more'
}
 ]

 const row = [
    {
        id:1,
        text : 'Privacy Policy'
    },
    {
        id:2,
        text : 'Terms & Conditions'
    },{
        id:3,
        text : "Don't Sell My Information"
    },{
        id:4,
        text : 'Opt Out'
    },{
        id:5,
        text : 'Our Data'
    },{
        id:6,
        text : 'Privacy Centre'
    },{
        id:7,
        text : 'Cookie Policy'
    },{
        id:8,
        text : 'Terms of Services'
    }

 ]


export { features  , s2Infos , helpInfos , trusted , column1 , column2 , row , pricingData , spendData }