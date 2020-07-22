import { makeStyles } from '@material-ui/core/styles';
import { Theme } from 'enum';

export const useStyle = makeStyles((theme) => ({
    container: {
        '& .RichEditor-root': {
            backgroundColor: `${theme.palette.type === Theme.Light ? '#fff' : '#333'}`,
            border: `${theme.palette.type === Theme.Light ? '1px solid #ddd' : '1px solid #666'}`,
            fontFamily: `Montserrat, serif`,
            borderRadius: '4px',
            fontSize: '14px',
            padding: '15px',
        },
        '& .RichEditor-editor': {
            borderTop: `${theme.palette.type === Theme.Light ? '1px solid #ddd' : '1px solid #666'}`,
            cursor: 'text',
            fontSize: '16px',
            marginTop: '10px',
            '& .public-DraftEditorPlaceholder-root, & .public-DraftEditor-content': {
                margin: '0 -15px -15px',
                padding: '15px',
            },
            '& .public-DraftEditor-content': {
                minHeight: '100px',
            },
            '& .RichEditor-blockquote': {
                borderLeft: `${theme.palette.type === Theme.Light ? '5px solid #eee' : '5px solid #555'}`,
                color: `${theme.palette.type === Theme.Light ? '#666' : '#eee'}`,
                fontFamily: "'Hoefler Text', Georgia, serif",
                fontStyle: 'italic',
                margin: '16px 0',
                padding: '10px 20px',
            },
            '& .public-DraftStyleDefault-pre': {
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                fontFamily: 'Inconsolata, Menlo, Consolas, monospace',
                fontSize: '16px',
                padding: '20px',
            },
        },
        '& .RichEditor-hidePlaceholder': {
            display: 'none',
        },
        '& .RichEditor-controls': {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            fontFamily: 'Helvetica, sans-serif',
            fontSize: '15px',
            marginBottom: '5px',
            userSelect: 'none',
        },
        '& .RichEditor-styleButton': {
            color: '#999',
            cursor: 'pointer',
            marginRight: '16px',
            padding: '2px 0',
            display: 'flex',
            alignItems: 'center',
        },
        '& .RichEditor-activeButton': {
            color: '#2196f3',
        },
    },
}));
