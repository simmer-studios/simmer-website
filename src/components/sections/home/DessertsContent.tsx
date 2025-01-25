import ServiceCourseHeading from "@/components/ServiceCourseHeadingRow";
import ServiceCourseList from "@/components/ServiceCourseList";
import ServiceCourseListItem from "@/components/ServiceCourseListItem";

const DessertsContent = () => {
  return (
    <div className="border-b-2 border-black pt-5 md:py-10">
      {/* heading row */}
      <ServiceCourseHeading
        mainText="DESSERTS"
        subText="Appetizers - what you need before you start anything."
      />
      {/* services row */}
      <ServiceCourseList className="mt-5 lg:mt-10">
        <ServiceCourseListItem text="SERVICE 1" number="01" />
        <ServiceCourseListItem
          text="SERVICE 2"
          number="02"
          variant="thin-italic"
        />
        <ServiceCourseListItem text="SERVICE 3" number="03" />
      </ServiceCourseList>
    </div>
  );
};

export default DessertsContent;
