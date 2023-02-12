import { PipelineEditor } from '../Pipeline/PipelineEditor';

import type { Pipeline } from '@aigur/client/src/Pipeline';
interface ImageToPoemPipelineViewProps {
	isActive: boolean;
	pipeline: Pipeline<any, any>;
}

export function ImageToPoemPipelineView(props: ImageToPoemPipelineViewProps) {
	return (
		<PipelineEditor
			className="h-[370px]"
			pipeline={props.pipeline}
			nodes={[
				{
					id: '0',
					label: 'Image Labeling',
					definition: {
						type: 'provider',
						label: 'Google Vision',
					},
				},
				{
					id: '1',
					label: 'Create Prompt',
					definition: {
						type: 'transformation',
					},
				},
				{
					id: '2',
					label: 'Generate Poem',
					definition: {
						type: 'provider',
						label: 'GPT3',
					},
				},
				{
					id: '3',
					label: 'Output',
					definition: {
						type: 'output',
					},
				},
			]}
			edges={[
				{ id: '0-1', source: '0', target: '1' },
				{ id: '1-2', source: '1', target: '2' },
				{ id: '2-3', source: '2', target: '3' },
			]}
			isActive={props.isActive}
		/>
	);
}
