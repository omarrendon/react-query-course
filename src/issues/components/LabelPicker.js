import useLabels from "../../hooks/useLabels"
import LoadingIcon from "../../shared/components/LoadingIcon";


export const LabelPicker = ({ selectedLabels, onChange }) => {
  const labels = useLabels();

  if (labels.isLoading)
    return (<LoadingIcon />)

  return (
    <>
      {labels.data?.map((label) => (
        <span
          key={label.id}
          className={`badge rounded-pill m-1 label-picker ${selectedLabels.includes(label.name) ? 'label-active' : ''}`}
          style={{
            border: `1px solid #${label.color}`, color: `#${label.color}`
          }}
          onClick={() => onChange(label.name)}
        >
          {label.name}
        </span>
      ))}
    </>
  )
}