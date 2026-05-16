"use client";
import { Select } from "@gravity-ui/uikit";
import { Button, Input, Label, Modal, TextArea } from "@heroui/react";
import { Pencil, Save, Trash2 } from "lucide-react";
import { DeleteModel } from "./deletemodel";

// 1. Data ebong _id props hishebe nite hobe
const EditModal = ({ item }) => {
  const { _id, packageName, country, category, price, duration, departureDate, imageUrl, description } = item ;
  // console.log(item);

  const onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      // 2. Fetch URL-e thikmoto _id pass kora
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/dastinations/${_id}`, {
        method: "PATCH", // Capital letter use kora better
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      
      if (res.ok) {
        alert("Data Updated Successfully!");
        console.log("Response:", result);
        // Modal close korar logic eikhane dite paren
      } else {
        console.error("Update failed");
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <Modal>
      <Button color="primary" startContent={<Pencil size={16} />}>
        Edit
      </Button>
      
      


      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="w-full max-w-3xl rounded-2xl">
            <Modal.CloseTrigger className="absolute right-4 top-4" />

            <Modal.Header className="flex flex-col items-start border-b pb-4">
              <Modal.Heading className="text-2xl font-bold">
                Update Travel Package
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body className="py-6">
              <form id="edit-travel-form" onSubmit={onsubmit} className="space-y-5">
                
                <div>
                  <Label>Package Name</Label>
                  <Input
                    name="packageName"
                    defaultValue={packageName} // Dynamic value
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <Label>Country</Label>
                    <Input name="country" defaultValue={country} />
                  </div>

                  <div>
                    <Label>Category</Label>
                    <Select name="category" defaultValue={[category || "beach"]}>
                      <Select.Option value="beach">Beach</Select.Option>
                      <Select.Option value="mountain">Mountain</Select.Option>
                      <Select.Option value="adventure">Adventure</Select.Option>
                    </Select>
                  </div>

                  <div>
                    <Label>Price (USD)</Label>
                    <Input name="price" type="number" defaultValue={price} />
                  </div>

                  <div>
                    <Label>Duration</Label>
                    <Input name="duration" defaultValue={duration} />
                  </div>
                </div>

                <div>
                  <Label>Departure Date</Label>
                  <Input name="departureDate" type="date" defaultValue={departureDate} />
                </div>

                <div>
                  <Label>Image URL</Label>
                  <Input name="imageUrl" defaultValue={imageUrl} />
                </div>

                <div>
                  <Label>Description</Label>
                  <TextArea name="description" minRows={5} defaultValue={description} />
                </div>
              </form>
            </Modal.Body>

            <Modal.Footer className="flex justify-end gap-3 border-t pt-4">
              <Button slot="close" variant="bordered" color="danger">
                Cancel
              </Button>

              <Button
                type="submit"
                form="edit-travel-form"
                color="primary"
                startContent={<Save size={18} />}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditModal;