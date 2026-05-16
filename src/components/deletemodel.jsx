"use client";
import { AlertDialog, Button } from "@heroui/react";

export function DeleteModel({ destination }) {
  // destination null hote pare, tai safety check dorkar
  const { _id, destinationName } = destination || {};

  const handleDelete = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/dastinations/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        // DELETE method-e sadharonoto body dorkar hoy na, 
        // tobuo jodi backend chay tobe object akare pathate hobe:
        body: JSON.stringify({ destinationName }), 
      });

      // Error check: Jodi response body empty thake (status 204), 
      // tobe res.json() call korle error dibe.
      if (res.ok) {
        // Jodi backend text ba empty pathay, tobe res.json() er bodole res.text() try korun
        // Athoba check korun response empty kina
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            const data = await res.json();
            console.log("Deleted successfully:", data);
        } else {
            console.log("Deleted successfully (No JSON response)");
        }
        
        // Success message ba page refresh logic eikhane din
        alert(`${destinationName} deleted!`);
      } else {
        console.error("Failed to delete");
      }
    } catch (error) {
      console.error("Error during delete:", error);
    }
  };

  return (
    <AlertDialog>
      <Button variant="danger">Delete</Button>
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
                Are you sure you want to delete <strong>{destinationName}</strong>? 
                This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              {/* handleDelete call kora hoyeche */}
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