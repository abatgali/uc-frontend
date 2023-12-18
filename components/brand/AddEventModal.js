"use client";
import React, { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import toast from "react-hot-toast";

export default function AddEventModal() {
  const supabase = createClientComponentClient();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [venue, setVenue] = useState(null);
  const [tba, setTba] = useState(false);
  // const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name, description, category, date, time, venue, tba);

    if (name === "") {
      toast.error("Please enter an event name");
    } else if (category === "") {
      toast.error("Please select an event category");
    } else if (tba === false && date === null) {
      toast.error(
        "Please add the date if the event is confirmed or check 'To be announced'."
      );
    } else if (tba === false && time === null) {
      toast.error(
        "Please add the time if the event is confirmed or check 'To be announced'."
      );
    } else if (tba === false && venue === null) {
      toast.error(
        "Please add the venue if the event is confirmed or check 'To be announced'."
      );
    } else {
      try {
        const { data, error } = await supabase.from("events").insert([
          {
            name: name,
            details: description,
            category_id: category,
            date: date,
            time: time,
            venue: venue,
            tba: tba,
          },
        ]);

        if (error) {
          console.log(error);
          toast.error(`Event couldn't be added right now.`);
        } else {
          console.log(data);
          toast.success("Event added successfully!");
          document.getElementById("my_modal_5").close();
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  const fetchCategories = async () => {
    const { data, error } = await supabase
      .from("categories")
      .select("id, category")
      .order("id", { ascending: true });

    console.log(data);
    if (error) {
      console.log(error);
      toast.error(error.message);
    } else {
      setCategories(data);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchCategories();
    };

    fetchData();
  }, []);
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Add new event
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-5">Create New Event</h3>
          <form>
            <div className="form-control flex flex-row items-center gap-4 ml-auto w-fit">
              <label className="label">
                <span className="label-text">To be Announced?</span>
                <span className="text-red-500">*</span>
              </label>
              <input
                type="checkbox"
                className="checkbox"
                onChange={(e) => setTba(e.target.checked)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Event Name<span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Event Name"
                className="input input-bordered"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Event Description</span>
              </label>
              <textarea
                placeholder=""
                className="textarea h-24 textarea-bordered textarea-lg"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Event Category<span className="text-red-500">*</span>
                </span>
              </label>
              <select
                className="select select-bordered w-full"
                defaultValue="default"
                onChange={(e) =>
                  setCategory(e.target.options[e.target.selectedIndex].id)
                }
              >
                <option disabled="disabled" value="default">
                  Select an option
                </option>
                {categories.map((category) => (
                  <option key={category.id} id={category.id}>
                    {category.category}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Event Date</span>
              </label>
              <input
                type="date"
                placeholder="Event Date"
                className="input input-bordered"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Event Time</span>
              </label>
              <input
                type="time"
                placeholder="Event Time"
                className="input input-bordered"
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Event Location</span>
              </label>
              <input
                type="text"
                placeholder="Venue"
                className="input input-bordered"
                onChange={(e) => setVenue(e.target.value)}
              />
            </div>
            {/* <div className="form-control">
              <label className="label">
                <span className="label-text">Event Image</span>
              </label>
              <input
                type="file"
                placeholder="Event Image"
                className="input "
              />
            </div> */}
            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn bg-red-600 text-white rounded-none"
                onClick={() => {
                  document.getElementById("my_modal_5").close();
                }}
              >
                Cancel
              </button>
              <button
                className="btn bg-green-700 w-24 text-white hover:bg-green-600 rounded-none"
                type="submit"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
