// DoctorData.js
import doc1 from "../../assets/doc1.png";
import doc2 from "../../assets/doc2.png";
import doc3 from "../../assets/doc3.png";

const doctorData = [
  {
    id: 1,
    name: "Dr. John Doe",
    specialization: "Cardiologist",
    photo: doc1,
    ratings: 4.5,
    location: "City Hospital",
    education: "MD, Cardiology",
    experience: "10+ years",
    price: "$150",
    availableSlots: ["9:00 AM", "11:00 AM", "2:00 PM"],
    description:
      "Dr. John Doe is a highly experienced cardiologist with a specialization in treating complex heart conditions. He has more than 10 years of clinical experience in the field of cardiology and is renowned for his expertise in advanced cardiac procedures. Dr. Doe is committed to providing personalized care to his patients and has a compassionate approach towards patient management. He believes in a holistic approach to cardiac care, focusing not only on treatment but also on prevention and lifestyle modifications to improve heart health. Dr. Doe has published numerous research papers and articles in reputed medical journals and is actively involved in teaching and mentoring medical students and residents.",
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    specialization: "Dermatologist",
    photo: doc2,
    ratings: 4.8,
    location: "Skin Clinic",
    education: "MD, Dermatology",
    experience: "8+ years",
    price: "$120",
    availableSlots: ["10:00 AM", "12:00 PM", "3:00 PM"],
    description:
      "Dr. Jane Smith is a board-certified dermatologist known for her expertise in medical and cosmetic dermatology. With over 8 years of experience, she specializes in treating a wide range of skin conditions, including acne, eczema, psoriasis, and skin cancer. Dr. Smith is dedicated to providing comprehensive and personalized care to her patients, helping them achieve healthy and radiant skin. She stays updated with the latest advancements in dermatology and utilizes state-of-the-art techniques and treatments to deliver optimal results. Dr. Smith is also actively involved in community outreach programs and volunteers her time to provide dermatologic care to underserved populations.",
  },
  {
    id: 3,
    name: "Dr. Michael Johnson",
    specialization: "Pediatrician",
    photo: doc3,
    ratings: 4.2,
    location: "Children's Hospital",
    education: "MD, Pediatrics",
    experience: "12+ years",
    price: "$130",
    availableSlots: ["9:30 AM", "11:30 AM", "2:30 PM"],
    description:
      "Dr. Michael Johnson is a compassionate and dedicated pediatrician with more than 12 years of experience in pediatric care. He is known for his gentle demeanor and expertise in managing a wide range of pediatric conditions, from routine check-ups to complex medical cases. Dr. Johnson is committed to providing comprehensive and holistic care to children of all ages, ensuring their health and well-being. He believes in building strong relationships with his young patients and their families, creating a supportive environment for pediatric care. Dr. Johnson is actively involved in advocacy efforts for child health and participates in medical missions to provide care to children in underserved communities.",
  },
  {
    id: 4,
    name: "Dr. Emily Brown",
    specialization: "Gynecologist",
    photo: doc1,
    ratings: 4.7,
    location: "Women's Clinic",
    education: "MD, Gynecology",
    experience: "9+ years",
    price: "$140",
    availableSlots: ["9:30 AM", "11:30 AM", "2:30 PM"],
    description:
      "Dr. Emily Brown is a highly skilled gynecologist specializing in women's health and reproductive care. With over 9 years of experience, she provides comprehensive gynecological services, including routine exams, prenatal care, and minimally invasive surgeries. Dr. Brown is committed to empowering women with knowledge and resources to make informed decisions about their health and well-being. She believes in a patient-centered approach to gynecological care, ensuring that each woman receives personalized attention and compassionate support throughout her healthcare journey. Dr. Brown is an active member of professional organizations dedicated to women's health and participates in continuing medical education to stay updated with the latest advancements in her field.",
  },
];

export default doctorData;
