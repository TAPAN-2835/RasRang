const navLinks = [
 {
	id: "cocktails",
	title: "Signature Blends",
 },
 {
	id: "about",
	title: "About Us",
 },
 {
	id: "art", // changed from 'work' to 'art' to match the section id
	title: "The Art",
 },
 {
	id: "contact",
	title: "Contact",
 },
];

const cocktailLists = [
  {
    name: "Mumbai Masala Mule",
    country: "MH (Maharashtra)",
    detail: "300 ml",
    price: "₹199",
  },
  {
    name: "Goa Sunset Fizz",
    country: "GA (Goa)",
    detail: "350 ml",
    price: "₹249",
  },
  {
    name: "Jaipur Royal Rose",
    country: "RJ (Rajasthan)",
    detail: "300 ml",
    price: "₹299",
  },
  {
    name: "Kerala Coconut Cooler",
    country: "KL (Kerala)",
    detail: "350 ml",
    price: "₹229",
  },
];

const mockTailLists = [
  {
    name: "Aam Panna Punch",
    country: "UP (Uttar Pradesh)",
    detail: "300 ml",
    price: "₹149",
  },
  {
    name: "Nimbu Shikanji Splash",
    country: "DL (Delhi)",
    detail: "300 ml",
    price: "₹129",
  },
  {
    name: "Rose Lassi Fizz",
    country: "PB (Punjab)",
    detail: "350 ml",
    price: "₹179",
  },
  {
    name: "Jamun Joy",
    country: "MH (Maharashtra)",
    detail: "300 ml",
    price: "₹159",
  },
];

const profileLists = [
 {
	imgPath: "/images/profile1.png",
 },
 {
	imgPath: "/images/profile2.png",
 },
 {
	imgPath: "/images/profile3.png",
 },
 {
	imgPath: "/images/profile4.png",
 },
];

const featureLists = [
  "Perfectly balanced blends",
  "Garnished to perfection",
  "Ice-cold refreshment every time",
  "Expertly shaken & stirred",
];

const goodLists = [
  "Handpicked Indian ingredients",
  "Signature mixing techniques",
  "Bartending artistry in action",
  "Freshly muddled flavors",
];

const storeInfo = {
 heading: "Where to Find Us",
 address: "Sindhu Bhavan, Ahmedabad, Gujarat 380006",
 contact: {
	phone: "+91 9106527737",
	email: "hello@rasrang.com",
 },
};

const openingHours = [
 { day: "Mon–Fri", time: "10:00am – 9:00pm" },
 { day: "Sat–Sun", time: "11:00am – 10:00pm" },
];

const socials = [
 {
	name: "Instagram",
	icon: "/images/insta.png",
	url: "/#hero",
 },
 {
	name: "X (Twitter)",
	icon: "/images/x.png",
	url: "/#hero",
 },
 {
	name: "Facebook",
	icon: "/images/fb.png",
	url: "/#hero",
 },
];

const allCocktails = [
 {
	id: 1,
	name: "Fruit Bazaar Martini",
	image: "/images/drink1.png",
	title: "A Carnival of Indian Fruits",
	description:
	 "A vibrant medley of fresh Indian fruits, this martini is a true celebration of color and flavor—just like a stroll through a bustling bazaar.",
 },
 {
	id: 2,
	name: "Kesar Zest Martini",
	image: "/images/drink2.png",
	title: "Saffron Citrus Luxury",
	description:
	 "Golden saffron and zesty citrus come together in this elegant martini, offering a taste of Indian royalty in every sip.",
 },
 {
	id: 3,
	name: "Phalon Ka Jashn",
	image: "/images/drink3.png",
	title: "Celebration of Fruits",
	description:
	 "A joyful blend of apples, kiwis, and berries, this drink is a festival of flavors—perfect for those who love their cocktails bursting with fruit.",
 },
 {
	id: 4,
	name: "Santra Masala Spritz",
	image: "/images/drink4.png",
	title: "Spiced Orange Refreshment",
	description:
	 "Refreshing orange, a hint of masala, and a spritz of fizz—this drink brings the taste of Indian summers to your glass.",
 },
];

export {
 navLinks,
 cocktailLists,
 mockTailLists,
 profileLists,
 featureLists,
 goodLists,
 openingHours,
 storeInfo,
 socials,
 allCocktails,
};
