"use client";
import {Checkbox, CheckboxGroup, Label} from "@heroui/react";
import {useState} from "react";

const Amenities = () => {
    const [selected, setSelected] = useState(["coding", "design"]);
    return (
        <div>
            <CheckboxGroup className="min-w-[320px]" name="skills" value={selected} onChange={setSelected}>
      <Label>Amenities</Label>
      <Checkbox value="Whiteboard">
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Content>
          <Label>Coding</Label>
        </Checkbox.Content>
      </Checkbox>
      <Checkbox value="design">
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Content>
          <Label>Design</Label>
        </Checkbox.Content>
      </Checkbox>
      <Checkbox value="writing">
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Content>
          <Label>Writing</Label>
        </Checkbox.Content>
      </Checkbox>
      <Label className="my-4 text-sm text-muted">Selected: {selected.join(", ") || "None"}</Label>
    </CheckboxGroup>
            
        </div>
    );
};

export default Amenities;