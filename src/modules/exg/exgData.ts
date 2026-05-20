export type ExgRow = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export const EXG_TABLE_DATA: ExgRow[] = [
  { id: "1", name: "Ada Lovelace", email: "ada@mail.local", role: "Admin" },
  { id: "2", name: "Grace Hopper", email: "grace@mail.local", role: "Editor" },
  { id: "3", name: "Margaret Hamilton", email: "margaret@mail.local", role: "Viewer" },
];

export function getExgRowById(id: string): ExgRow | undefined {
  return EXG_TABLE_DATA.find((row: ExgRow) => row.id === id);
}
