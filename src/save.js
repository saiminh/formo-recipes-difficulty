import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	return (
		<div { ...useBlockProps.save({
      className: `difficulty-level`
    }) }>
      {
        [1,2,3,4,5].map((i) => (
          <span key={i} className={i <= attributes.difficulty ? 'circle-full' : 'circle-empty'}></span>
        ))
      }
		</div>
	);
}
