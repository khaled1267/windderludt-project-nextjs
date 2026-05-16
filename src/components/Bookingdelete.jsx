"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export function Bookingdelete({ bookingId }) {
  const router = useRouter();

  const handleDelete = async () => {
    // চেক করার জন্য কনসোলে দেখুন আইডি আসছে কিনা
    console.log("Deleting Booking ID:", bookingId);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${bookingId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        // ডিলিট সফল হলে পেজটি রিফ্রেশ করবে যাতে লিস্ট থেকে আইটেমটি চলে যায়
        router.refresh(); 
        console.log("Delete successful");
      } else {
        const errorData = await res.json();
        console.error("Server Error:", errorData);
      }
    } catch (error) {
      console.error("Network Error:", error);
    }
  };

  return (
    <AlertDialog>
      {/* ট্রিকার বাটন */}
      <Button variant="danger" className="flex items-center gap-2 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
        <span>🗑️</span> Delete Project
      </Button>
      
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                Are you sure you want to delete this booking? 
                This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              {/* এখানে onClick এ handleDelete কল হবে */}
              <Button onClick={handleDelete} slot="close" variant="danger">
                Confirm Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}