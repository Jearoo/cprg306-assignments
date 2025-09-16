import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <p>Name: Jiro Roales</p>
      <p>
        GitHub:{" "}
        <Link href="https://github.com/Jearoo/cprg306-assignments"
           style={{ textDecoration: "underline"}}>Jearoo/cprg306-assignments
        </Link>
      </p>
    </div>
  );
}