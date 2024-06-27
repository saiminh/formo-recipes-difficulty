import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls,  } from '@wordpress/block-editor';
import { RangeControl, PanelBody } from '@wordpress/components';
import { useState } from '@wordpress/element';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {

  const [ difficulty, setDifficulty ] = useState( attributes.difficulty );

	return (
		<div { ...useBlockProps({
      className: `difficulty-level`
    }) }>
      <InspectorControls>
        <p>{__('How long will each slide be visible?')}</p>
        <PanelBody>
          <RangeControl 
            label={__('Difficulty Level')}
            value={difficulty}
            onChange={(value) => {
              setDifficulty(value)
              setAttributes({ difficulty: value })
            }}
            min={1}
            max={5}
          />
        </PanelBody>
      </InspectorControls>
      {
        [1,2,3,4,5].map((i) => (
          <span key={i} className={i <= difficulty ? 'circle-full' : 'circle-empty'}></span>
        ))
      }
		</div>
	);
}
