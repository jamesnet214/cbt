import * as React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import { alpha, styled } from '@mui/material/styles';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import Collapse from '@mui/material/Collapse';
import { useSpring, animated } from 'react-spring';

function MinusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14, color: '#bbbbbb' }} {...props}>
      <path d="M19,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10L12,6H19A2,2 0 0,1 21,8H21L4,8V18L6.14,10H23.21L20.93,18.5C20.7,19.37 19.92,20 19,20Z" />
    </SvgIcon>
  );
}

function PlusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14, color: '#bbbbbb' }} {...props}>
      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
    </SvgIcon>
  );
}

function CloseSquare(props) {
  return (
    <SvgIcon
      fontSize="inherit"
      style={{ width: 14, height: 14, color: '#34568B' }}
      {...props}
    >
      <path d="M20 5L20 19L4 19L4 5H20M20 3H4C2.89 3 2 3.89 2 5V19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V5C22 3.89 21.11 3 20 3M18 15H6V17H18V15M10 7H6V13H10V7M12 9H18V7H12V9M18 11H12V13H18V11Z" />
    </SvgIcon>
  );
}

function TransitionComponent(props) {
  const style = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(20px,0,0)',
    },
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
    },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

TransitionComponent.propTypes = {
  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,
};

const StyledTreeItem = styled((props) => (
    <TreeItem {...props} TransitionComponent={TransitionComponent} />))(({ theme }) => ({
        [`& .${treeItemClasses.iconContainer}`]: {
            '& .close': {
                opacity: 0.3,
            },
        },
        [`& .${treeItemClasses.group}`]: {
            marginLeft: 0,
            paddingLeft: 10,
            borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.2)}`,
        },
        [`& .${treeItemClasses.content}`]: {
            '& .MuiTreeItem-label': {
                fontSize: '12px',
                marginLeft: 0,
                fontFamily: [
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'Roboto',
                    '"Helvetica Neue"',
                    'Arial',
                    'sans-serif',
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                ].join(','),
            },
        },
}));

const data = [
    { "nodeId": "1", label: "컴퓨터" }
];

export default function CustomizedTreeView() {
  return (
    <TreeView
      aria-label="customized"
      defaultExpanded={['1']}
      defaultCollapseIcon={<MinusSquare />}
      defaultExpandIcon={<PlusSquare />}
      defaultEndIcon={<CloseSquare />}
      sx={{ height: 264, flexGrow: 1, maxWidth: 400, margin: '0px', overflowY: 'auto' }}
    >
      <StyledTreeItem nodeId="1" label="컴퓨터">
        <StyledTreeItem nodeId="2" label="정보처리">
          <StyledTreeItem nodeId="3" label="정보처리기사"/>
          <StyledTreeItem nodeId="4" label="정보처리산업기사"/>
          <StyledTreeItem nodeId="5" label="정보처리기능사"/>
        </StyledTreeItem>
        <StyledTreeItem nodeId="6" label="컴퓨터활용능력">
          <StyledTreeItem nodeId="7" label="컴퓨터활용능력 1급"/>
          <StyledTreeItem nodeId="8" label="컴퓨터활용능력 2급"/>
          <StyledTreeItem nodeId="9" label="컴퓨터활용능력 3급"/>
        </StyledTreeItem>
        <StyledTreeItem nodeId="10" label="워드프로세서">
          <StyledTreeItem nodeId="11" label="워드프로세서 1급"/>
          <StyledTreeItem nodeId="12" label="워드프로세서 2급"/>
        </StyledTreeItem>
        <StyledTreeItem nodeId="13" label="디자인">
          <StyledTreeItem nodeId="14" label="그래픽스운용기능사"/>
        </StyledTreeItem>
      </StyledTreeItem>
    </TreeView>
  );
}
