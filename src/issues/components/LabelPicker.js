import useLabels from "../../hooks/useLabels"


export const LabelPicker = () => {
  const labels = useLabels();

  console.log({labels});

  return (
    <div>
      <span
        className="badge rounded-pill m-1 label-picker"
        style={{ border: `1px solid #ffccd3`, color: '#ffccd3' }}
      >
        Primary
      </span>
    </div>
  )
}