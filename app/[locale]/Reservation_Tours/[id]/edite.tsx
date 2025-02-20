import * as React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/Components/ui/popover"; // Utilisation d'un Popover pour une sélection multiple
import ParticipantCounter from "@/Components/ParticipantCounter";
import { UsersIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";
import { Calendar as CalendarIcon } from "lucide-react"; // Icône du calendrier
import { Calendar } from "@/Components/ui/calendar"; // Utilisation d'un vrai calendrier
import Button  from "@/Components/Button";
import { format } from "path";

interface Peoples {
  Adults: number;
  Children: number;
  Babies: number;
}

const Edite: React.FC<{ peoples: Peoples }> = ({ peoples }) => {
  const tt = useTranslations("homepage.tours");

  // État pour la date et les participants
  const [date, setDate] = React.useState<Date | null>(null);
  const [editeAdults, setEditeAdults] = React.useState(peoples.Adults);
  const [editChildren, setEditeChildren] = React.useState(peoples.Children);
  const [editeBabies, setEditeBabies] = React.useState(peoples.Babies);

  // Fonction pour gérer la sélection de date
  const handleDateSelect = (selectedDate: Date | undefined) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time part to ensure comparison is based on date only

    if (selectedDate && selectedDate < today) {
      alert("Veuillez sélectionner une date valide (aujourd'hui ou une date future).");
      return;
    }

    if (selectedDate !== undefined) {
      setDate(selectedDate);
    }
  };

  return (
    <div className="flex  space-y-4">
      {/* Sélecteur de Date */}
      <div className="border p-4 rounded-md shadow bg-white flex items-center gap-2">
        



      {/* <div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon />
                  {date ? format(date, "PPP") : <span>{tt('form.select_Date')}</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={handleDateSelect}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div> */}



      </div>
    <div>

      {/* Sélecteur de participants */}
      <Popover>
        <PopoverTrigger className="w-1/4 border px-4 py-2 rounded-md bg-white shadow-sm">
          <UsersIcon className="w-6 h-6 text-gray-500" />
        </PopoverTrigger>
        <PopoverContent className="p-4 w-full bg-white shadow-lg rounded-md">
          <div className="space-y-2">
            <ParticipantCounter
              label={tt("form.Number_Adults")}
              value={editeAdults}
              onDecrement={() => decrement(setEditeAdults, editeAdults)}
              onIncrement={() => increment(setEditeAdults, editeAdults)}
            />
            <ParticipantCounter
              label={tt("form.Number_Children")}
              value={editChildren}
              onDecrement={() => decrement(setEditeChildren, editChildren)}
              onIncrement={() => increment(setEditeChildren, editChildren)}
            />
            <ParticipantCounter
              label={tt("form.Number_Babies")}
              value={editeBabies}
              onDecrement={() => decrement(setEditeBabies, editeBabies)}
              onIncrement={() => increment(setEditeBabies, editeBabies)}
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
    </div>
  );
};

// Fonctions pour incrémenter/décrémenter les participants
function decrement(setValue: React.Dispatch<React.SetStateAction<number>>, value: number) {
  if (value > 0) setValue(value - 1);
}

function increment(setValue: React.Dispatch<React.SetStateAction<number>>, value: number) {
  setValue(value + 1);
}

export default Edite;
