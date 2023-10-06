import { oswald } from "../../pages/_app";
export default function EventsLayout({ children }) {
  return (
    <>
      <div className="w-full">
        <div className="mx-auto ">{children}</div>
      </div>
    </>
  );
}
