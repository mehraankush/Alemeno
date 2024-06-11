"use client"
import CourseList from "@/components/core/CourseList";

export default function Home() {
  // const addCourse = async () => {

  //   const sampleCourse = {
  //     name: 'Introduction to React Native',
  //     instructor: 'John Doe',
  //     description: 'Learn the basics of React Native development and build your first mobile app.',
  //     enrollmentStatus: 'Open',
  //     thumbnail: 'https://www.google.com/imgres?q=react%20native&imgurl=https%3A%2F%2Fwww.igmguru.com%2Fblog%2Fwp-content%2Fuploads%2F2024%2F05%2FWhat-Is-React-Native.png&imgrefurl=https%3A%2F%2Fwww.igmguru.com%2Fblog%2Fwhat-is-react-native%2F&docid=N93PS_t9uYe7bM&tbnid=pAPgVSgypxrKfM&vet=12ahUKEwjp7vvQttOGAxUvZWwGHVAWDt0QM3oFCIYBEAA..i&w=1024&h=631&hcb=2&ved=2ahUKEwjp7vvQttOGAxUvZWwGHVAWDt0QM3oFCIYBEAA',
  //     duration: '8 weeks',
  //     schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
  //     location: 'Online',
  //     prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
  //     backendTechnologies: ['Node.js', 'Express.js', 'MongoDB']
  //   };

  //   try { 
  //     const res = await addDoc(collection(db, "course"), sampleCourse);
  //     console.log("Course added successfully", res);
  //   } catch (error) {
  //     console.error("Error adding course: ", error);
  //   }
  // };

  return (
    <div className="min-h-screen bg-white flex justify-center ">
      <div className=" w-full min-h-screen h-full text-black xl:max-w-[1300px]">
        <CourseList />
      </div>
    </div>
  );
}

