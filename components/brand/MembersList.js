import React from "react";
import BtmNav from "@/components/brand/BtmNav";

export default function MembersList() {
  return (
    <>
      <details className="collapse bg-base-200">
        <summary className="collapse-title text-xl font-medium rounded-none">
          Members
        </summary>
        <div className="collapse-content">
          <p>content</p>
        </div>
      </details>
      <BtmNav />
    </>
  );
}
