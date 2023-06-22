const data = [
  {
    SrNo: 1,
    "Name of Society": "saharayn universal multipurose society limited",
    Address:
      "At & P.O. Railway Colony, Gorakkhpur, District-Gorakhpur Uttar Pradesh",
    State: "UTTAR PRADESH",
    District: "KUSHI NAGAR",
    "Area of Operation": "Haryana, UttarPradesh, Himachal, Punjab",
    "Sector Type": "Credit",
  },
  {
    SrNo: 2,
    "Name of Society": "JMJ Multi State Agro Cooperative Society Ltd.",
    Address:
      "TC 48/1442-1, Sreeniva, Parekkati House, Chathankulangara Temple South, Puthurkkara, Ayyanthole, Thrissur 680003 Kerala",
    State: "KERALA",
    "Date of Registration": "13/10/2022",
    "Area of Operation": "Bihar, West bengal, Odisha",
    "Sector Type": "Agro",
  },
  {
    SrNo: 3,
    "Name of Society": "Devbhoomi Agro Multi State Cooperative Society Ltd.",
    Address: "S/o Sateesh Kumar, Tejupur, Haridwar, Uttarakhand 247661",
    State: "UTTARAKHAND",
    "Date of Registration": "04/10/2022",
    "Area of Operation": "Tamil Nadu, karnataka",
    "Sector Type": "Agro",
  },
  {
    SrNo: 4,
    "Name of Society":
      "Aarya Multi Specialty Cooperative Hospital and Hospital and Research Center ltd.",
    Address: "Gate No 165, Nimgaon (T), Madha, Solapur, 413210 maharashtra",
    State: "MAHARASHTRA",
    "Date of Registration": "04/10/2022",
    "Area of Operation": "Haryana, Punajb",
    "Sector Type": "Health/Hospital",
  },
  {
    SrNo: 5,
    "Name of Society": "Agriculture Development Cooperative Federation",
    Address:
      "A/P 344, Lower Ground Floor, Sector 86, Preet City, SAS Nagar, Mohali, Punjab\n160055",
    State: "PUNJAB",
    "Date of Registration": "22/09/2022",
    "Area of Operation": "Manipur, Meghalaya",
    "Sector Type": "Federation",
  },
  {
    SrNo: 6,
    "Name of Society":
      "Prosperity Multi State Housing Cooperative Society ltd.",
    Address:
      "Jayem Arcade 385 A6, First Floor,\nKamarajar Road, Peelamedu, Coimbatore 641004",
    State: "TAMIL NADU",
    "Date of Registration": "15/09/2022",
    "Area of Operation": "Maharashtra, Gujarat, Rajasthan",
    "Sector Type": "Housing",
  },
  {
    SrNo: 7,
    "Name of Society":
      "Greenfield Multi State Agro Allied and Marketing Cooperative Society Ltd. (GMAAMCS)",
    Address:
      "Plot No 92, H.No 4-487, New Balaji Nagar Colony, Meerpet, Behind Janapriya Apartments, Hyderabad 500097 Telangana",
    State: "TELANGANA",
    "Date of Registration": "12/09/2022",
    "Area of Operation": "Gujarat, Rajasthan",
    "Sector Type": "Agro",
  },
  {
    SrNo: 8,
    "Name of Society":
      "Shri Sharda Agro Multi State Co- operative Society Ltd.",
    Address: "Shri Sharda Agro Multi State Co-operative Society Ltd.",
    State: "UTTAR PRADESH",
    "Date of Registration": "02/09/2022",
    "Area of Operation": "Maharashtra,Goa.Karnataka, Andhra Pradesh",
    "Sector Type": "Agro",
  },
  {
    SrNo: 9,
    "Name of Society":
      "Nature Delight Multi State Cooperative Dairy & Agro Products Ltd.",
    Address: "Kalas Gate, No 1189, A/P Kalas, Indapur, Pune 413105 Maharashtra",
    State: "MAHARASHTRA",
    "Date of Registration": "31/08/2022",
    "Area of Operation": "Andhra Pradesh, Telangna",
    "Sector Type": "Agro",
  },
  {
    SrNo: 10,
    "Name of Society": "Travancore Cochin Tourism Cooperative Society Ltd",
    Address: "Idukki, Kerala 685584",
    State: "KERALA",
    District: "IDUKKI",
    "Date of Registration": "31/08/2022",
    "Area of Operation": "Madhya Pradesh, Chhatisgarh, Jharkhan, Bihar",
    "Sector Type": "Tourism",
  },
  {
    SrNo: 11,
    "Name of Society": "Janamaitheri Agricultural Cooperative Society Ltd.",
    Address: "Janamaitheri Agricultural Cooperative Society Ltd.",
    State: "KERALA",
    District: "THIRUVANANTHAPURAM",
    "Date of Registration": "16/08/2022",
    "Area of Operation": "Maharashtra, Gujarat, Rajasthan",
    "Sector Type": "Agro",
  },
  {
    SrNo: 12,
    "Name of Society":
      "Swaraj Multipurpose Federation of Cooperative Society Ltd",
    Address:
      "Shop No 2, Yadav Market, Opposite Radha Ballav mandir, Palla Chowk, Tilak Road,\nFaridabad 121001 Haryana",
    State: "HARYANA",
    "Date of Registration": "16/08/2022",
    "Area of Operation": "Gujarat, Rajasthan",
    "Sector Type": "Federation",
  },
  {
    SrNo: 13,
    "Name of Society":
      "Green Safe Multi State Agriculture Cooperative Society Ltd.",
    Address: "Coimbatore, Tamil Nadu",
    State: "TAMIL NADU",
    District: "COIMBATORE",
    "Date of Registration": "12/08/2022",
    "Area of Operation": "Haryana, Delhi",
    "Sector Type": "Agro",
  },
  {
    SrNo: 14,
    "Name of Society": "Mango Growers cooperative society Ltd. (MANCO)",
    Address: "Visakhapatnam",
    State: "ANDHRA PRADESH",
    District: "VISAKHAPATANAM",
    "Date of Registration": "10/08/2022",
    "Area of Operation": "Haryana, Delhi, UttarPradesh, ",
    "Sector Type": "Agro",
  },
  {
    SrNo: 15,
    "Name of Society":
      "Srijan Krishi Vipnan Multi State Cooperative Society Ltd.",
    Address: "Lucknow",
    State: "UTTAR PRADESH",
    District: "LUCKNOW",
    "Date of Registration": "29/07/2022",
    "Area of Operation": "Uttrakhand, Himachal Pradesh, Jammu & Kashmir",
    "Sector Type": "Agro",
  },
  {
    SrNo: 16,
    "Name of Society":
      "Kamal Multispeciality Cooperative Hospital & Research center Ltd.",
    Address: "Beed Maharashtra",
    State: "MAHARASHTRA",
    District: "BEED",
    "Date of Registration": "22/07/2022",
    "Area of Operation": "Maharashtra, Gujarat, Rajasthan",
    "Sector Type": "Health/Hospital",
  },
  {
    SrNo: 17,
    "Name of Society":
      "Nagebaba Multi Specialty Cooperative Hospital and Research Center Ltd.",
    Address: "Ahmednagar",
    State: "MAHARASHTRA",
    District: "AHMEDNAGAR",
    "Date of Registration": "24/06/2022",
    "Area of Operation": "Haryana, Punjab, Rajasthan",
    "Sector Type": "Health/Hospital",
  },
  {
    SrNo: 18,
    "Name of Society":
      "The Urban Care Multi State Agro Cooperative Society Ltd.",
    Address: "Kerala",
    State: "KERALA",
    District: "KOZHIKODE",
    "Date of Registration": "27/06/2022",
    "Area of Operation": "Haryana, Rajasthan",
    "Sector Type": "Agro",
  },
  {
    SrNo: 19,
    "Name of Society":
      "Bharathikerkar Fishermen Cooperative Ltd. (BHARATHIKERKAR)",
    Address: "Kerala",
    State: "KERALA",
    District: "THRISSUR",
    "Date of Registration": "27/06/2022",
    "Area of Operation": "Gujarat, Rajasthan, Haryana, Delhi",
    "Sector Type": "Fisheries",
  },
  {
    SrNo: 20,
    "Name of Society": "Swayam Samruddhi Multi State Cooperative Society Ltd.",
    Address: "Hyderabad, Telangana",
    State: "TELANGANA",
    District: "HYDERABAD",
    "Date of Registration": "15/06/2022",
    "Area of Operation": "Kerala, karnataka, Maharashtra, Gujarat",
    "Sector Type": "Agro",
  },
  {
    SrNo: 21,
    "Name of Society":
      "Shree Sai Seva Multi Specialty\nCooperative Hospital and Research center ltd",
    Address: "Ahmednagar, Maharashtra",
    State: "MAHARASHTRA",
    District: "AHMEDNAGAR",
    "Date of Registration": "15/06/2022",
    "Area of Operation": "Maharashtra, Karnataka, Tamil nadu",
    "Sector Type": "Health/Hospital",
  },
  {
    SrNo: 22,
    "Name of Society":
      "Venkateshwara Multi State Multi Specialty Hospital and Research Ltd.",
    Address: "Maharashtra",
    State: "MAHARASHTRA",
    District: "NASIK",
    "Date of Registration": "08/06/2022",
    "Area of Operation": "Haryana, Gujarat, Maharashtra, Delhi",
    "Sector Type": "Health/Hospital",
  },
  {
    SrNo: 23,
    "Name of Society":
      "Bharathimanass labour and\nConstruction Cooperative Ltd.",
    Address: "Manipur",
    State: "MANIPUR",
    District: "BISHNUPUR",
    "Date of Registration": "06/06/2022",
    "Area of Operation": "West bengal, Andhra Pradesh",
    "Sector Type": "Construction",
  },
  {
    SrNo: 24,
    "Name of Society":
      "Kairali Agriculture Multi State Cooperative Society Ltd.",
    Address: "Kerala",
    State: "KERALA",
    District: "THRISSUR",
    "Date of Registration": "06/06/2022",
    "Area of Operation": "Maharashtra, Gujarat, Rajasthan",
    "Sector Type": "Agro",
  },
  {
    SrNo: 25,
    "Name of Society": "Jewan Kothi Multi State Agro Cooperative Society Ltd.",
    Address: "Uttar Pradesh",
    State: "UTTAR PRADESH",
    District: "BASTI",
    "Date of Registration": "06/06/2022",
    "Area of Operation": "Haryana, UttarPradesh, Himachal, Punjab",
    "Sector Type": "Agro",
  },
  {
    SrNo: 26,
    "Name of Society":
      "Bharathimanass Agriculture\nCooperative Ltd. (BHARATHIMANAS)",
    Address: "Manipur",
    State: "MANIPUR",
    District: "BISHNUPUR",
    "Date of Registration": "03/06/2022",
    "Area of Operation": "Bihar, West bengal, Odisha",
    "Sector Type": "Agro",
  },
  {
    SrNo: 27,
    "Name of Society":
      "Youth Employability Skill Training\nCooperative Educational Society Ltd.",
    Address: "PATHANAMTHITTA",
    State: "KERALA",
    District: "ERNAKULAM",
    "Date of Registration": "02/06/2022",
    "Area of Operation": "Tamil Nadu, karnataks",
    "Sector Type": "Others",
  },
  {
    SrNo: 28,
    "Name of Society":
      "Jai Ratnagarbha Agriculture Multi State Cooperative Society Ltd.",
    Address: "Prayag Raj, uttar Pradesh",
    State: "UTTAR PRADESH",
    District: "BAREILLY",
    "Date of Registration": "28/05/2022",
    "Area of Operation": "Haryana, Punajb",
    "Sector Type": "Agro",
  },
  {
    SrNo: 29,
    "Name of Society":
      "Shikharji Multi State Agro Processing and Marketing Cooperative Society\nLtd",
    Address: "Buldana, Maharashtra",
    State: "MAHARASHTRA",
    District: "BULDHANA",
    "Date of Registration": "27/05/2022",
    "Area of Operation": "Manipur, Meghalaya",
    "Sector Type": "Agro",
  },
  {
    SrNo: 30,
    "Name of Society":
      "News Agriculture Export & Marketing Cooperative society Ltd.",
    Address: "Kalkaji, Delhi",
    State: "NEW DELHI",
    District: "NEW DELHI",
    "Date of Registration": "21/05/2022",
    "Area of Operation": "Maharashtra, Gujarat, Rajasthan",
    "Sector Type": "Agro",
  },
  {
    SrNo: 31,
    "Name of Society":
      "Krashnadi Multi State Vehicle Services Cooperative Society Ltd.",
    Address: "Beed, maharashtra",
    State: "MAHARASHTRA",
    District: "BEED",
    "Date of Registration": "12/05/2022",
    "Area of Operation": "Gujarat, Rajasthan",
    "Sector Type": "Others",
  },
  {
    SrNo: 32,
    "Name of Society":
      "Lotus Multi Specialty Cooperative Hospital and Research Center Ltd.",
    Address: "Osmanabad, Maharashtra",
    State: "MAHARASHTRA",
    District: "BEED",
    "Date of Registration": "27/04/2022",
    "Area of Operation": "Maharashtra,Goa.Karnataka, Andhra Pradesh",
    "Sector Type": "Health/Hospital",
  },
  {
    SrNo: 33,
    "Name of Society":
      "Keshavraj Multi Speciality Cooperative Hospital & Research Centre Ltd",
    Address: "Osmanabad, Maharashtra",
    State: "MAHARASHTRA",
    District: "OSMANABAD",
    "Date of Registration": "27/04/2022",
    "Area of Operation": "Andhra Pradesh, Telangna",
    "Sector Type": "Health/Hospital",
  },
  {
    SrNo: 34,
    "Name of Society":
      "Keshavraj Multi Speciality Cooperative Hospital & Research Centre Ltd",
    Address: "Kolhaour, Maharashtra",
    State: "MAHARASHTRA",
    District: "KOLHAPUR",
    "Date of Registration": "27/04/2022",
    "Area of Operation": "Madhya Pradesh, Chhatisgarh, Jharkhan, Bihar",
    "Sector Type": "Health/Hospital",
  },
  {
    SrNo: 35,
    "Name of Society": "Vanashri Cooperative Power & Agro Progressive ltd",
    Address: "Sangli , Maharashtra",
    State: "MAHARASHTRA",
    District: "SANGLI",
    "Date of Registration": "26/04/2022",
    "Area of Operation": "Maharashtra, Gujarat, Rajasthan",
    "Sector Type": "Agro",
  },
  {
    SrNo: 36,
    "Name of Society":
      "Samrudh Marathwada Multi State\nVehicle Services Cooperative Society Ltd.",
    Address: "Beed, maharashtra",
    State: "MAHARASHTRA",
    District: "BEED",
    "Date of Registration": "20/04/2022",
    "Area of Operation": "Gujarat, Rajasthan",
    "Sector Type": "Others",
  },
  {
    SrNo: 37,
    "Name of Society":
      "Bharathiyajkl Machuwara Samudaay Cooperative Ltd.\n(BHARATHIJKLMASACO)",
    Address: "Baramulla, Kashmir",
    State: "JAMMU AND KASHMIR",
    District: "BADGAM",
    "Date of Registration": "18/04/2022",
    "Area of Operation": "Haryana, Delhi",
    "Sector Type": "Fisheries",
  },
  {
    SrNo: 38,
    "Name of Society": "Prestige Agro Multi State Cooperative Society Ltd",
    Address: "Uttar Pradesh",
    State: "UTTAR PRADESH",
    District: "BULANDSHAHR",
    "Date of Registration": "01/04/2022",
    "Area of Operation": "Haryana, Delhi, UttarPradesh, ",
    "Sector Type": "Agro",
  },
  {
    SrNo: 39,
    "Name of Society": "Vidhata Hamal Multi State Cooperative Society Ltd",
    Address: "Bhandara, Maharashtra",
    State: "MAHARASHTRA",
    District: "BHANDARA",
    "Date of Registration": "01/04/2022",
    "Area of Operation": "Uttrakhand, Himachal Pradesh, Jammu & Kashmir",
    "Sector Type": "Agro",
  },
  {
    SrNo: 40,
    "Name of Society":
      "Dr Appasahed Urf Sa. Re. Patil\nJayysinghpur Udgaon Sahakari Bank Ltd",
    Address: "Kolhapur, maharashtra",
    State: "MAHARASHTRA",
    District: "KOLHAPUR",
    "Date of Registration": "01/04/2022",
    "Area of Operation": "Maharashtra, Gujarat, Rajasthan",
    "Sector Type": "Cooperative Bank",
  },
  {
    SrNo: 41,
    "Name of Society":
      "Krushisadhna Mahila Multi State Agro Cooperative society Ltd",
    Address: "Nashik maharashtra",
    State: "MAHARASHTRA",
    District: "NASIK",
    "Date of Registration": "01/04/2022",
    "Area of Operation": "Haryana, Punjab, Rajasthan",
    "Sector Type": "Agro",
  },
  {
    SrNo: 42,
    "Name of Society":
      "Seva Sadan Multi Specialty\nCooperative Hospital and Research Center Ltd",
    Address:
      "Gate no. 14, Chaitnya Complex, behind Tahsil karyalaya, Shrigonda Dist - Ahmednagar Pin -413701 (Maharashtra)",
    State: "MAHARASHTRA",
    District: "AHMEDNAGAR",
    "Date of Registration": "21/03/2022",
    "Area of Operation": "Haryana, Rajasthan",
    "Sector Type": "Agro",
  },
  {
    SrNo: 43,
    "Name of Society": "Bulandshahr Agro MultiState cooperative Society Ltd",
    Address:
      "Mohalla Mahadev, Galimpur Road, Dibai, Bulandshahr, Uttar Pradesh-202393",
    State: "UTTAR PRADESH",
    District: "BULANDSHAHR",
    "Date of Registration": "21/03/2022",
    "Area of Operation": "Gujarat, Rajasthan, Haryana, Delhi",
    "Sector Type": "Agro",
  },
  {
    SrNo: 44,
    "Name of Society":
      "B K Dhanlakshmi Multi State Agro Cooperative Society Limited",
    Address:
      "Mayflower signature, Office 7B, 7th Floor, Avinashi Road, Peelumedu, Coimbatore- 641004, Tamil Nadu",
    State: "TAMIL NADU",
    District: "COIMBATORE",
    "Date of Registration": "08/03/2022",
    "Area of Operation": "Kerala, karnataka, Maharashtra, Gujarat",
    "Sector Type": "Agro",
  },
  {
    SrNo: 45,
    "Name of Society":
      "The Walmik Multi State Cooperative Handloom Weavers Cooperative Society Ltd",
    Address:
      "Plot No 63, Aoodumbae, Gurudev nagar, Nandanavan, Hanuman Nagar, Nagpur 440009, Maharashtra",
    State: "MAHARASHTRA",
    District: "NAGPUR",
    "Date of Registration": "21/02/2022",
    "Area of Operation": "Maharashtra, Karnataka, Tamil nadu",
    "Sector Type": "Industrial/Textile",
  },
  {
    SrNo: 46,
    "Name of Society": "Ente Naadu Multi State Agro Co- operative Society Ltd.",
    Address:
      "ST George High School, Aluva- Munnar Road, Kothamangalam, Ernakulam,\n686691, Kerala",
    State: "KERALA",
    District: "ERNAKULAM",
    "Date of Registration": "03/02/2022",
    "Area of Operation": "Haryana, Gujarat, Maharashtra, Delhi",
    "Sector Type": "Agro",
  },
  {
    SrNo: 47,
    "Name of Society": "Rajsidhi Cooperative Cotton & Agro Industries Ltd",
    Address: "Ahmednagar 414401, Maharashtra",
    State: "MAHARASHTRA",
    District: "AHMEDNAGAR",
    "Date of Registration": "12/01/2022",
    "Area of Operation": "Maharashtra, Gujarat, Rajasthan",
    "Sector Type": "Agro",
  },
  {
    SrNo: 48,
    "Name of Society":
      "Natural Agro Farming Multi State Cooperative Society Ltd.",
    Address: "D77, S/F, East of Kailash, New delhi 110065",
    State: "NEW DELHI",
    District: "NEW DELHI",
    "Date of Registration": "12/01/2022",
    "Area of Operation": "Kerala, karnataka, Maharashtra, Gujarat",
    "Sector Type": "Agro",
  },
  {
    SrNo: 49,
    "Name of Society": "Mansa Development Cooperative Society Ltd",
    Address:
      "41 Sukh Sagar, phase 4 colony, near Mittal College, Rasal, Kharod Bhopal 38, Madhya Pradesh",
    State: "MADHYA PRADESH",
    District: "BHOPAL",
    "Date of Registration": "12/10/2021",
    "Area of Operation": "Haryana, Delhi",
    "Sector Type": "Agro",
  },
  {
    SrNo: 50,
    "Name of Society": "Om Agro Multi State Cooperative society Ltd",
    Address: "Ahulana (Gohana) Sonipat Haryana 131301",
    State: "HARYANA",
    District: "SONIPAT",
    "Date of Registration": "22/11/2021",
    "Area of Operation": "Haryana, Delhi",
    "Sector Type": "Agro",
  },
  {
    SrNo: 51,
    "Name of Society":
      "Ramchandra Multi Speciality Cooperative Hospital & Research Center Ltd",
    Address:
      "S.No. 2/2, Near SBI bank, Savakar Colony, Islampur, Walwa, Sangli 415409,\nMaharashtra",
    State: "MAHARASHTRA",
    District: "SANGLI",
    "Date of Registration": "10/11/2021",
    "Area of Operation": "Haryana, UttarPradesh, Himachal, Punjab",
    "Sector Type": "Health/Hospital",
  },
  {
    SrNo: 52,
    "Name of Society":
      "Mudra Agriculture & Skill Development Multistate Cooperative Society Ltd",
    Address:
      "15-A, 3-4-757/22, APHB Building Near Raghavendra Swamy Temple Opposite Telangana Grameena Bank, Barkatputra, Hyderabad 500027",
    State: "TELANGANA",
    District: "ADILABAD",
    "Date of Registration": "12/04/2017",
    "Area of Operation": "Bihar, West bengal, Odisha",
    "Sector Type": "Agro",
  },
  {
    SrNo: 53,
    "Name of Society": "The Bhuj Mercantile Coop. Bank Ltd",
    Address: "Vyapar Bhawan, Mithakhali 6 Roads, Ahmedabad-380006(Gujarat)",
    State: "GUJARAT",
    District: "AHMADABAD",
    "Date of Registration": "14/09/2021",
    "Area of Operation": "Tamil Nadu, karnataks",
    "Sector Type": "Cooperative Bank",
  },
  {
    SrNo: 54,
    "Name of Society": "Heaven Multi State Agro Cooperative Society Ltd",
    Address:
      "Kh No 403, Babhani Nagar, Andar, Sominath Nagar, Ward No. 7, Deoria Kasiya Bypass Road, Deoria , Uttar Pradesh 274001",
    State: "UTTAR PRADESH",
    District: "MORADABAD",
    "Date of Registration": "14/09/2021",
    "Area of Operation": "Haryana, Punajb",
    "Sector Type": "Agro",
  },
  {
    SrNo: 55,
    "Name of Society": "The Sutex Cooperative Bank Ltd",
    Address:
      "Surjaram, Bachkaniwala Bhawan, Near Navjivan Circle, Udhana Magdalla Road, Surat 395017 Gujarat",
    State: "GUJARAT",
    District: "VALSAD",
    "Date of Registration": "14/09/2021",
    "Area of Operation": "Manipur, Meghalaya",
    "Sector Type": "Cooperative Bank",
  },
  {
    SrNo: 56,
    "Name of Society":
      "The Navbharat Multi State Agro Farming and Marketing Cooperative Society Ltd",
    Address: "Shop No 112, Floor-I, Sharda Arcade, Paliyad Road, Batod Gujarat",
    State: "GUJARAT",
    District: "BATOD",
    "Date of Registration": "09/08/2021",
    "Area of Operation": "Maharashtra, Gujarat, Rajasthan",
    "Sector Type": "Agro",
  },
  {
    SrNo: 57,
    "Name of Society":
      "BharathiMana Fishermen development Cooperative Society ltd.\n(BHARATHIMANACO)",
    Address:
      "Kha- Potshangham Maning, Leikai, PO & PS Bishnupur 795126 Manipur",
    State: "MANIPUR",
    District: "BISHNUPUR",
    "Date of Registration": "06/07/2021",
    "Area of Operation": "Gujarat, Rajasthan",
    "Sector Type": "Fisheries",
  },
  {
    SrNo: 58,
    "Name of Society": "Agrovision Farmer Multi State Cooperative Society Ltd.",
    Address:
      "H.No 3, Gate No 1, Krishna Colony, Near Universal School, Gorakhpur Kasya Road, Deoria, Uttar Pradesh 274001",
    State: "UTTAR PRADESH",
    District: "DEORIA",
    "Date of Registration": "27/05/2021",
    "Area of Operation": "Maharashtra,Goa.Karnataka, Andhra Pradesh",
    "Sector Type": "Agro",
  },
  {
    SrNo: 59,
    "Name of Society":
      "Chitrakoot Multi State Agriculture Marketing Cooperative Society Ltd. (CMAMCS)",
    Address:
      "H.No 104, Village & Post Sahewa, thana-\nGirwan, Tehsil Atarra, Banda, Uttar Pradesh 210120",
    State: "UTTAR PRADESH",
    District: "BANDA",
    "Date of Registration": "29/04/2021",
    "Area of Operation": "Andhra Pradesh, Telangna",
    "Sector Type": "Agro",
  },
  {
    SrNo: 60,
    "Name of Society": "CP Agrotech Multi State Cooperative Society Ltd.",
    Address:
      "C/O Manoj Kumar, Mohalla-Kannon Goyan, Kasba- Jhinjhana, Jhinjhana Rural, Shamli, Uttar Pradesh 247773",
    State: "UTTAR PRADESH",
    District: "MUZAFFARNAGAR",
    "Date of Registration": "16/03/2021",
    "Area of Operation": "Madhya Pradesh, Chhatisgarh, Jharkhan, Bihar",
    "Sector Type": "Agro",
  },
  {
    SrNo: 61,
    "Name of Society":
      "Simplydesi Selfhelp Products, Processing and Marketing Multi State Cooperative Society Ltd",
    Address: "52, Ananda Park Extension, East Punjabi Bagh, New Delhi 110026",
    State: "NEW DELHI",
    District: "NEW DELHI",
    "Date of Registration": "24/02/2021",
    "Area of Operation": "Maharashtra, Gujarat, Rajasthan",
    "Sector Type": "Fisheries",
  },
  {
    SrNo: 62,
    "Name of Society":
      "Bharati North East Fisherman Co-operative Ltd. (BHARATICO)",
    Address:
      "C/O Swambha Basumatary, near Simlaguri Post Office, Simlaguri, Dhaliagaon,\nChirang(BTR), Assam 783381",
    State: "ASSAM",
    District: "CHIRANG",
    "Date of Registration": "15/02/2021",
    "Area of Operation": "Gujarat, Rajasthan",
    "Sector Type": "Fisheries",
  },
  {
    SrNo: 63,
    "Name of Society": "Chambal Agriculture Marketing Cooperative Ltd",
    Address: "525, rajput Nagar, Bharouli road, Bhind, Madhya Pradesh 477001",
    State: "MADHYA PRADESH",
    District: "BHIND",
    "Date of Registration": "15/01/2021",
    "Area of Operation": "Haryana, Delhi",
    "Sector Type": "Marketing",
  },
  {
    SrNo: 64,
    "Name of Society": "Sharda Agro Multi State Cooperative Society Ltd",
    Address: "Bhopal, Madhya Pradesh",
    State: "MADHYA PRADESH",
    District: "BHOPAL",
    "Date of Registration": "14/12/2020",
    "Area of Operation": "Haryana, Delhi, UttarPradesh, ",
    "Sector Type": "Agro",
  },
  {
    SrNo: 65,
    "Name of Society": "N E Railway Cooperative Credit Society Ltd,",
    Address:
      "Chief Worshop Manager Office, NE Railway, Izzatnagar, Bareilly, Uttar Pradesh",
    State: "UTTAR PRADESH",
    District: "BAREILLY",
    "Date of Registration": "24/11/2020",
    "Area of Operation": "Uttrakhand, Himachal Pradesh, Jammu & Kashmir",
    "Sector Type": "Credit",
  },
  {
    SrNo: 66,
    "Name of Society": "Ramraja Multi state Agro Cooperative Society ltd.",
    Address:
      "102, Eligent Tower, Royal City, Shivpuri Road, Jhansi, 284003 Uttar Pradesh",
    State: "UTTAR PRADESH",
    District: "JHANSI",
    "Date of Registration": "12/11/2020",
    "Area of Operation": "Maharashtra, Gujarat, Rajasthan",
    "Sector Type": "Agro",
  },
  {
    SrNo: 67,
    "Name of Society": "Vitthal Rao Shinde Sahakari Sahkar Karkhana Ltd",
    Address:
      "Gangamainagar, Post Pimpalner, Taluka Madha, Solapur, 413210 Maharashtra",
    State: "MAHARASHTRA",
    District: "SOLAPUR",
    "Date of Registration": "05/11/2020",
    "Area of Operation": "Haryana, Punjab, Rajasthan",
    "Sector Type": "Industrial/Textile",
  },
  {
    SrNo: 68,
    "Name of Society":
      "Ambika Multi State Health Service for the Weaker Section Cooperative Society Ltd",
    Address:
      "Sai Illam, Floor-2, 53/2, Bharatheshwarar,\n3rd Street, Kodambakkam, Chennai 600024, Tamil Nadu",
    State: "TAMIL NADU",
    District: "CHENNAI",
    "Date of Registration": "14/09/2020",
    "Area of Operation": "Haryana, Rajasthan",
    "Sector Type": "Agro",
  },
  {
    SrNo: 69,
    "Name of Society": "The UP Kisan Development cooperative Society Ltd",
    Address:
      "65, Bheem Nagar, Vijay Khand 2, Gomti Nagar, Lucknow-226010, Uttar Pradesh",
    State: "UTTAR PRADESH",
    District: "LUCKNOW",
    "Date of Registration": "10/08/2020",
    "Area of Operation": "Gujarat, Rajasthan, Haryana, Delhi",
    "Sector Type": "Agro",
  },
  {
    SrNo: 70,
    "Name of Society": "Farmtrade Agro Multi state Marketing Cooperative Ltd",
    Address: "B-92. Mayfiels Garden Sector 48, Gurugram- 122002",
    State: "HARYANA",
    District: "GURGAON",
    "Date of Registration": "10/08/2020",
    "Area of Operation": "Kerala, karnataka, Maharashtra, Gujarat",
    "Sector Type": "Marketing",
  },
  {
    SrNo: 71,
    "Name of Society":
      "Bihar State handloom Weavers Cooperative Union Ltd (BISHCOTEX)",
    Address: "Handloom Bhawan, Rajendra Place, Patna, Bihar",
    State: "BIHAR",
    District: "PATNA",
    "Date of Registration": "14/07/2020",
    "Area of Operation": "Maharashtra, Karnataka, Tamil nadu",
    "Sector Type": "Agro",
  },
  {
    SrNo: 72,
    "Name of Society": "Radhika Agricultural Cooperative Society Ltd",
    Address: "Swami Puran Colony, Nai Basti, Jhansi 284002, Uttar Pradesh",
    State: "UTTAR PRADESH",
    District: "JHANSI",
    "Date of Registration": "24/04/2020",
    "Area of Operation": "Haryana, Gujarat, Maharashtra, Delhi",
    "Sector Type": "Agro",
  },
  {
    SrNo: 73,
    "Name of Society":
      "Farm to Foreign Exports Entrepreneur Development Multi State Cooperative Society Ltd",
    Address:
      "H.No. 6-9, Gundugolanu(P.O), Bhimadole (Mandal), Andhra Pradesh-534427",
    State: "ANDHRA PRADESH",
    District: "WEST GODAVARI",
    "Date of Registration": "16/01/2020",
    "Area of Operation": "Haryana, UttarPradesh, Himachal, Punjab",
    "Sector Type": "Agro",
  },
  {
    SrNo: 74,
    "Name of Society":
      "Dharitri Jute and Eco Friendly Products Multi State Cooperative Society Ltd",
    Address:
      "D.No.12-2-42111, Alapati Nagar, Gudimalkapur, Hyderabad-500028, Telangana",
    State: "TELANGANA",
    District: "ADILABAD",
    "Date of Registration": "12/12/2019",
    "Area of Operation": "Bihar, West bengal, Odisha",
    "Sector Type": "Agro",
  },
  {
    SrNo: 75,
    "Name of Society":
      "The Malabar Multi State Agro Cooperative Society Limited",
    Address: "1st Floor, Aiswarya Complex, Thavakkara, Kannur, Kerala- 670002",
    State: "KERALA",
    District: "KANNUR",
    "Date of Registration": "20/10/2019",
    "Area of Operation": "Haryana, Punajb",
    "Sector Type": "Agro",
  },
  {
    SrNo: 76,
    "Name of Society": "Sai Raam Multi State Agri Cooperative Society Ltd",
    Address:
      "No.6. (D-18), 6th Cross West Extension, Thillai Nagar, Trichy, Tamil Nadu-620008",
    State: "TAMIL NADU",
    District: "DHARMAPURI",
    "Date of Registration": "06/12/2019",
    "Area of Operation": "Manipur, Meghalaya",
    "Sector Type": "Agro",
  },
  {
    SrNo: 77,
    "Name of Society":
      "Prabhavana Multi State Womens’ Jute and Allied Fibre Products Cooperative Society Ltd",
    Address:
      ", House. No 2-2-647/G/18/1, Near Shivam Road, DD Colony, Hyderabad, Telangana\n500013",
    State: "TELANGANA",
    District: "ADILABAD",
    "Date of Registration": "27/09/2019",
    "Area of Operation": "Maharashtra, Gujarat, Rajasthan",
    "Sector Type": "Agro",
  },
  {
    SrNo: 78,
    "Name of Society": "The Gayatri Cooperative Urban Bank Ltd",
    Address:
      "7-1,72, 73,74 Gayatri Towers, Tehsil Chowrasta, Jagtial Town, Dist. Jagtail, Telangana",
    State: "TELANGANA",
    District: "KARIMNAGAR",
    "Date of Registration": "23/08/2019",
    "Area of Operation": "Gujarat, Rajasthan",
    "Sector Type": "Cooperative Bank",
  },
  {
    SrNo: 79,
    "Name of Society":
      "Shri Saibaba Multi State Cooperative Dudh Utpadak & Prakriya Sangh Ltd",
    Address:
      "A/p Lohgaon, Tal- Rahata, Dist. Ahmednagar, PIN 413712 Maharashtra",
    State: "MAHARASHTRA",
    District: "AHMEDNAGAR",
    "Date of Registration": "06/08/2019",
    "Area of Operation": "Maharashtra,Goa.Karnataka, Andhra Pradesh",
    "Sector Type": "Dairy",
  },
  {
    SrNo: 80,
    "Name of Society":
      "Subhiksha Organic Farmers Multi State Cooperative Society Ltd",
    Address:
      "Krushi Nivasa, At Kuruvalli,Thirthahalli, Shimoga, Karnataka 577432",
    State: "KARNATAKA",
    District: "SHIMOGA",
    "Date of Registration": "03/07/2019",
    "Area of Operation": "Andhra Pradesh, Telangna",
    "Sector Type": "Agro",
  },
  {
    SrNo: 81,
    "Name of Society": "The Panipat Urban Cooperative Bank Ltd (PUCB)",
    Address: "510/8, G T Road,Panipat, Haryana 132103",
    State: "HARYANA",
    District: "PANIPAT",
    "Date of Registration": "14/05/2019",
    "Area of Operation": "Madhya Pradesh, Chhatisgarh, Jharkhan, Bihar",
    "Sector Type": "Cooperative Bank",
  },
  {
    SrNo: 82,
    "Name of Society": "Green Earth Agro Cooperative Society Ltd",
    Address:
      "3/170, Vishwas Khand, Gomti Society , Lucknow 226010, Uttar Pradesh",
    State: "UTTAR PRADESH",
    District: "LUCKNOW",
    "Date of Registration": "03/05/2019",
    "Area of Operation": "Maharashtra, Gujarat, Rajasthan",
    "Sector Type": "Agro",
  },
  {
    SrNo: 83,
    "Name of Society": "Bihar Cooperative Federation Ltd",
    Address: "Budh Marg, Patna 800001, Bihar",
    State: "BIHAR",
    District: "PATNA",
    "Date of Registration": "03/10/2018",
    "Area of Operation": "Gujarat, Rajasthan",
    "Sector Type": "Agro",
  },
  {
    SrNo: 84,
    "Name of Society": "Bharathi Cooperative Housing Society Ltd",
    Address:
      "87-A, Perambur High Road, Perambur Post, Chennai 600011 Tamil Nadu",
    State: "TAMIL NADU",
    District: "CHENNAI",
    "Date of Registration": "18/05/2018",
    "Area of Operation": "Haryana, Delhi",
    "Sector Type": "Housing",
  },
  {
    SrNo: 85,
    "Name of Society": "The Surat People’s Cooperative Bank Ltd",
    Address: "Vasudhara Bhavan, Timalyawad, Nanpura, Surat, Gujarat",
    State: "GUJARAT",
    "Date of Registration": "28/03/2018",
    "Area of Operation": "Haryana, Delhi, UttarPradesh, ",
    "Sector Type": "Cooperative Bank",
  },
  {
    SrNo: 86,
    "Name of Society": "Sanmati Sahakari Bank Ltd",
    Address: "9/114, Laxmi Market, Ichalkaranji Kolhapur, Maharashtra 416115",
    State: "MAHARASHTRA",
    District: "JALGAON",
    "Date of Registration": "27/03/2018",
    "Area of Operation": "Uttrakhand, Himachal Pradesh, Jammu & Kashmir",
    "Sector Type": "Cooperative Bank",
  },
  {
    SrNo: 87,
    "Name of Society":
      "Reserve Bank Staff & Officers cooperative Credit Society Ltd",
    Address:
      "C/ Reserve Bank of India, Amar Building, 2nd Floor, Sir P Road, Fort, Mumbai,\n400001, Maharashtra",
    State: "MAHARASHTRA",
    District: "MUMBAI",
    "Date of Registration": "13/02/2018",
    "Area of Operation": "Maharashtra, Gujarat, Rajasthan",
    "Sector Type": "Credit",
  },
  {
    SrNo: 88,
    "Name of Society": "Dev Lok Housing Cooperative Ltd",
    Address: "A-55, Dwarka, Sector-19, New Delhi",
    State: "NEW DELHI",
    District: "NEW DELHI",
    "Date of Registration": "02/02/2018",
    "Area of Operation": "Haryana, Punjab, Rajasthan",
    "Sector Type": "Housing",
  },
  {
    SrNo: 89,
    "Name of Society": "Maa Vaishno Agro Multi State Cooperative Society Ltd",
    Address:
      "Shop No. 25, Block-A, Old LIC Building, Near BSNL Exchange, Super Market, Lalitpur,\n284403, Uttar Pradesh",
    State: "UTTAR PRADESH",
    District: "LALITPUR",
    "Date of Registration": "19/01/2018",
    "Area of Operation": "Haryana, Rajasthan",
    "Sector Type": "Agro",
  },
  {
    SrNo: 90,
    "Name of Society": "Sree Balki Multi State Cooperative Housing Society Ltd",
    Address:
      "No. 9, Elango Street, Kabilar, Nagar,\nManavala Nagar, Tiruvallur 602002, Tamil Nadu",
    State: "TAMIL NADU",
    District: "THIRUVALLUR",
    "Date of Registration": "05/01/2018",
    "Area of Operation": "Gujarat, Rajasthan, Haryana, Delhi",
    "Sector Type": "Housing",
  },
  {
    SrNo: 91,
    "Name of Society": "Southern Multi State Agro Cooperative Society Ltd,",
    Address:
      "27 Gokulam, Mount Pleasant Road, Conoor , Ooty, Tamil Nadu 643102",
    State: "TAMIL NADU",
    District: "COIMBATORE",
    "Date of Registration": "19/12/2017",
    "Area of Operation": "Kerala, karnataka, Maharashtra, Gujarat",
    "Sector Type": "Agro",
  },
  {
    SrNo: 92,
    "Name of Society": "Dombivli Nagari Sahakari Bank Ltd",
    Address:
      "Plot No P-52, MIDC Phase-II, Kalyan Shil Road, Dombovli (East) Maharashtra 421204",
    State: "MAHARASHTRA",
    District: "THANE",
    "Date of Registration": "28/07/2017",
    "Area of Operation": "Maharashtra, Karnataka, Tamil nadu",
    "Sector Type": "Cooperative Bank",
  },
  {
    SrNo: 93,
    "Name of Society":
      "Lucknow Division Insurance Employees Cooperative Credit Society Ltd",
    Address:
      "Jeevan Prakash Building, 30, Hazratganj , Lucknow, Uttar Pradesh 226001",
    State: "UTTAR PRADESH",
    District: "LUCKNOW",
    "Date of Registration": "11/07/2017",
    "Area of Operation": "Haryana, Gujarat, Maharashtra, Delhi",
    "Sector Type": "Credit",
  },
  {
    SrNo: 94,
    "Name of Society": "The Kalyan Janata Sahakari Bank Ltd",
    Address:
      "Kalyanam astu, Om Vijaykrishna, Apt, Adharwadi, Kalyan, West, Thane\nMaharashtra 421301",
    State: "MAHARASHTRA",
    District: "THANE",
    "Date of Registration": "24/03/2017",
    "Area of Operation": "West bengal, Andhra Pradesh",
    "Sector Type": "Cooperative Bank",
  },
  {
    SrNo: 95,
    "Name of Society":
      "The Eastern Railway Employees\nCooperative Bank Limited (Eastern & North East Frontier Railway Employees Co-\noperative Bank Ltd.)",
    Address: "17, Neta Ji Subhash Road, Kolkata 700001",
    State: "WEST BENGAL",
    District: "MALDAH",
    "Date of Registration": "22/03/2017",
    "Area of Operation": "Maharashtra, Gujarat, Rajasthan",
  },
  {
    SrNo: 96,
    "Name of Society":
      "Purvanchal Krishi Avam Kisan kalyan Multi State Cooperative Society Ltd",
    Address:
      "House No. 799, Vill: Taraya Sujan, Post : Tarya Sujan, Block : Seorahi, Tehsil :\nTamkihi Raj, Dist. Kushinagar, Pin 274409,\nUttar Pradesh",
    State: "UTTAR PRADESH",
    District: "KUSHI NAGAR",
    "Date of Registration": "06/03/2017",
    "Area of Operation": "Gujarat, Rajasthan, Haryana, Delhi",
    "Sector Type": "Agro",
  },
  {
    SrNo: 97,
    "Name of Society": "The Ajara Urban Cooperative Bank Limited",
    Address: "393-B, Main Road Ajara, Kolhapur, 416505, Maharashtra",
    State: "MAHARASHTRA",
    District: "KOLHAPUR",
    "Date of Registration": "17/02/2017",
    "Area of Operation": "Kerala, karnataka, Maharashtra, Gujarat",
    "Sector Type": "Cooperative Bank",
  },
  {
    SrNo: 98,
    "Name of Society": "Bihar State Housing Cooperative Federation Ltd",
    Address: "Lalit Bhawan, Bailey Road, Patna , Bihar 800014",
    State: "BIHAR",
    District: "BUXAR",
    "Date of Registration": "19/10/2016",
    "Area of Operation": "Maharashtra, Karnataka, Tamil nadu",
    "Sector Type": "Housing",
  },
  {
    SrNo: 99,
    "Name of Society":
      "The Navodit Cooperative Urban Thrift & Credit Society Ltd",
    Address: "147, South Amarkali, Delhi 110051",
    State: "NEW DELHI",
    District: "NEW DELHI",
    "Date of Registration": "27/09/2016",
    "Area of Operation": "Haryana, Gujarat, Maharashtra, Delhi",
    "Sector Type": "Credit",
  },
  {
    SrNo: 100,
    "Name of Society": "Lokseva Multi State Credit Cooperative Society Ltd",
    Address: "A/p Tisgaon Pravara, Rahata, Ahmednagar 413712 Maharashtra",
    State: "MAHARASHTRA",
    District: "NAGPUR",
    "Date of Registration": "26/09/2016",
    "Area of Operation": "West bengal, Andhra Pradesh",
    "Sector Type": "Credit",
  },
];

function findSocietyById(id) {
  var soc;
  data.map((society) => {
    if (society.SrNo.toString() == id.toString()) {
      soc = society;
    }
  });
  return soc;
}

var regiYearCount = { "2016": 0, "2017": 0, "2018": 0, "2019": 0, "2020": 0, "2021": 0, "2022": 0 };
var sectoralCount = {
  Credit: 0,
  Agro: 0,
  Health: 0,
  Federation: 0,
  Tourism: 0,
  Housing: 0,
  Construction: 0,
  Textile: 0,
  Bank: 0,
  Fisheries: 0,
  Marketing: 0,
  Dairy: 0,
  Others: 0,
};

var monthCount = {
  January: 0,
  Febuary: 0,
  March: 0,
  April: 0,
  May: 0,
  June: 0,
  July: 0,
  August: 0,
  September: 0,
  October: 0,
  November: 0,
  December: 0,
};

var stateCount = {
  "UTTAR PRADESH": 0,
  KERALA: 0,
  UTTARAKHAND: 0,
  MAHARASHTRA: 0,
  PUNJAB: 0,
  "TAMIL NADU": 0,
  TELANGANA: 0,
  HARYANA: 0,
  "ANDHRA PRADESH": 0,
  MANIPUR: 0,
  "NEW DELHI": 0,
  "JAMMU AND KASHMIR": 0,
  "MADHYA PRADESH": 0,
  GUJARAT: 0,
  ASSAM: 0,
  BIHAR: 0,
  "WEST BENGAL": 0,
};

data.map((entry) => {
  if (entry["Date of Registration"]?.includes("2016")) regiYearCount["2016"]++;
  if (entry["Date of Registration"]?.includes("2017")) regiYearCount["2017"]++;
  if (entry["Date of Registration"]?.includes("2018")) regiYearCount["2018"]++;
  if (entry["Date of Registration"]?.includes("2019")) regiYearCount["2019"]++;
  if (entry["Date of Registration"]?.includes("2020")) regiYearCount["2020"]++;
  if (entry["Date of Registration"]?.includes("2021")) regiYearCount["2021"]++;
  if (entry["Date of Registration"]?.includes("2022")) regiYearCount["2022"]++;

  // if (sectoralCount.hasOwnProperty(entry["Sector Type"])) {
  //   sectoralCount[`${entry["Sector Type"]}`]++;
  // } else {
  //   sectoralCount[`${entry["Sector Type"]}`] = 0;
  // }

  if (entry["Sector Type"]?.includes("Credit")) sectoralCount.Credit++;
  if (entry["Sector Type"]?.includes("Agro")) sectoralCount.Agro++;
  if (entry["Sector Type"]?.includes("Health")) sectoralCount.Health++;
  if (entry["Sector Type"]?.includes("Federation")) sectoralCount.Federation++;
  if (entry["Sector Type"]?.includes("Tourism")) sectoralCount.Tourism++;
  if (entry["Sector Type"]?.includes("Housing")) sectoralCount.Housing++;
  if (entry["Sector Type"]?.includes("Construction"))
    sectoralCount.Construction++;
  if (entry["Sector Type"]?.includes("Textile")) sectoralCount.Textile++;
  if (entry["Sector Type"]?.includes("Bank")) sectoralCount.Bank++;
  if (entry["Sector Type"]?.includes("Fisheries")) sectoralCount.Fisheries++;
  if (entry["Sector Type"]?.includes("Marketing")) sectoralCount.Marketing++;
  if (entry["Sector Type"]?.includes("Dairy")) sectoralCount.Dairy++;
  if (entry["Sector Type"]?.includes("Others")) sectoralCount.Others++;

  if (entry["State"]?.includes("ANDHRA")) stateCount["ANDHRA PRADESH"]++;
  if (entry["State"]?.includes("ASSAM")) stateCount["ASSAM"]++;
  if (entry["State"]?.includes("BIHAR")) stateCount["BIHAR"]++;
  if (entry["State"]?.includes("GUJARAT")) stateCount["GUJARAT"]++;
  if (entry["State"]?.includes("HARYANA")) stateCount["HARYANA"]++;
  if (entry["State"]?.includes("JAMMU AND KASHMIR"))
    stateCount["JAMMU AND KASHMIR"]++;
  if (entry["State"]?.includes("KERALA")) stateCount["KERALA"]++;
  if (entry["State"]?.includes("MADHYA")) stateCount["MADHYA PRADESH"]++;
  if (entry["State"]?.includes("MAHARASHTRA")) stateCount["MAHARASHTRA"]++;
  if (entry["State"]?.includes("MANIPUR")) stateCount["MANIPUR"]++;
  if (entry["State"]?.includes("NEW DELHI")) stateCount["NEW DELHI"]++;
  if (entry["State"]?.includes("PUNJAB")) stateCount["PUNJAB"]++;
  if (entry["State"]?.includes("TAMIL NADU")) stateCount["TAMIL NADU"]++;
  if (entry["State"]?.includes("TELANGANA")) stateCount["TELANGANA"]++;
  if (entry["State"]?.includes("UTTAR")) stateCount["UTTAR PRADESH"]++;
  if (entry["State"]?.includes("UTTARAKHAND")) stateCount["UTTARAKHAND"]++;
  if (entry["State"]?.includes("WEST BENGAL")) stateCount["WEST BENGAL"]++;

  if (entry["Date of Registration"]?.includes("01/2022"))
    monthCount["January"]++;
  if (entry["Date of Registration"]?.includes("02/2022"))
    monthCount["Febuary"]++;
  if (entry["Date of Registration"]?.includes("03/2022")) monthCount["March"]++;
  if (entry["Date of Registration"]?.includes("04/2022")) monthCount["April"]++;
  if (entry["Date of Registration"]?.includes("05/2022")) monthCount["May"]++;
  if (entry["Date of Registration"]?.includes("06/2022")) monthCount["June"]++;
  if (entry["Date of Registration"]?.includes("07/2022")) monthCount["July"]++;
  if (entry["Date of Registration"]?.includes("08/2022"))
    monthCount["August"]++;
  if (entry["Date of Registration"]?.includes("09/2022"))
    monthCount["September"]++;
  if (entry["Date of Registration"]?.includes("10/2022"))
    monthCount["October"]++;
  if (entry["Date of Registration"]?.includes("11/2022"))
    monthCount["November"]++;
  if (entry["Date of Registration"]?.includes("12/2022"))
    monthCount["December"]++;
});

export {
  data,
  regiYearCount,
  sectoralCount,
  stateCount,
  monthCount,
  findSocietyById,
};
