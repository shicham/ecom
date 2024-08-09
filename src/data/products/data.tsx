export const statuses = [
  {
    label: "Active",
	selected: false,
  },
  {
    label: "Draft",
	selected: true,
  },
  {
    label: "Archived",
	selected: false,
  },
]

export type Status = (typeof statuses)[number]