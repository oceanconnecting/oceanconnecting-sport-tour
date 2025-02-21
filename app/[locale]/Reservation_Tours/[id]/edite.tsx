import * as React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/Components/ui/popover";
import ParticipantCounter from "@/Components/ParticipantCounter";
import { UsersIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";
import { Calendar as CalendarIcon, ChevronDown } from "lucide-react";
import { Calendar } from "@/Components/ui/calendar";
import { Button } from "@/Components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface Peoples {
  Adults: number;
  Children: number;
  Babies: number;
}

interface EditeProps {
  peoples: Peoples;
  onSave: (updatedData: Peoples & { date: Date | null }) => void;
}

const Edite: React.FC<EditeProps> = ({ peoples, onSave }) => {
  const tt = useTranslations("homepage.tours");

  // États pour la date et les participants
  const [editedDate, setEditedDate] = React.useState<Date | null>(null);
  const [editedAdults, setEditedAdults] = React.useState(peoples.Adults);
  const [editedChildren, setEditedChildren] = React.useState(peoples.Children);
  const [editedBabies, setEditedBabies] = React.useState(peoples.Babies);

  // Fonction pour gérer la sélection de date
  const handleDateSelect = (selectedDate: Date | undefined) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate && selectedDate < today) {
      alert("Veuillez sélectionner une date valide (aujourd'hui ou une date future).");
      return;
    }
    if (selectedDate !== undefined) {
      setEditedDate(selectedDate);
    }
  };

  // Fonction pour valider les changements
  const handleSave = () => {
    onSave({
      date: editedDate,
      Adults: editedAdults,
      Children: editedChildren,
      Babies: editedBabies,
    });
  };

  return (
    <div className="flex flex-col space-y-4 w-full">
      {/* Sélecteur de Date */}
      <div className="border p-4 rounded-md shadow bg-white flex items-center gap-4">
        <div className="flex-1">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal flex items-center gap-2",
                  !editedDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="w-5 h-5 text-gray-500" />
                {editedDate ? format(editedDate, "PPP") : <span>{tt('form.select_Date')}</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={editedDate || undefined}
                onSelect={handleDateSelect}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Sélecteur de participants */}
      <div className="w-full">
        <Popover>
          <PopoverTrigger className="w-full flex items-center justify-between border px-4 py-3 rounded-md bg-white shadow-sm hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-2">
              <UsersIcon className="w-6 h-6 text-gray-500" />
              <p className="text-gray-700">{tt("form.select_person")}</p>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </PopoverTrigger>
          <PopoverContent className="p-4 w-full bg-white shadow-lg rounded-md">
            <div className="space-y-4">
              <ParticipantCounter
                label={tt("form.Number_Adults")}
                value={editedAdults}
                onDecrement={() => updateCount(setEditedAdults, editedAdults, "dec")}
                onIncrement={() => updateCount(setEditedAdults, editedAdults, "inc")}
              />
              <ParticipantCounter
                label={tt("form.Number_Children")}
                value={editedChildren}
                onDecrement={() => updateCount(setEditedChildren, editedChildren, "dec")}
                onIncrement={() => updateCount(setEditedChildren, editedChildren, "inc")}
              />
              <ParticipantCounter
                label={tt("form.Number_Babies")}
                value={editedBabies}
                onDecrement={() => updateCount(setEditedBabies, editedBabies, "dec")}
                onIncrement={() => updateCount(setEditedBabies, editedBabies, "inc")}
              />
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Bouton de validation */}
      <Button onClick={handleSave} className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md">
        {tt("form.confirme_change")}
      </Button>
    </div>
  );
};

// Fonction pour mettre à jour le nombre de participants
const updateCount = (
  setValue: React.Dispatch<React.SetStateAction<number>>,
  value: number,
  type: "inc" | "dec"
) => {
  setValue(type === "inc" ? value + 1 : Math.max(0, value - 1));
};

export default Edite;
