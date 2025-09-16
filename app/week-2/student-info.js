import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <p>Name: Jiro Roales</p>
      <p>
        <Link href="https://github.com/Jearoo/cprg306-assignments">
          GitHub: https://github.com/Jearoo/cprg306-assignments
        </Link>
      </p>
    </div>
  );
}