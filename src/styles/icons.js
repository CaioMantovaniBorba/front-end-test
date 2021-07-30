import styled, { css } from 'styled-components';
import { BsPencilSquare } from 'react-icons/bs';
import {
    AiOutlineCamera,
    AiOutlineVideoCamera,
    AiOutlineLike,
} from 'react-icons/ai';

import {
    RiMapPinLine,
    RiBuildingLine,
    RiBankLine,
    RiMessage2Line,
    RiShareForwardLine,
    RiAlarmLine,
    RiLockFill,
    RiArrowDownSLine,
} from 'react-icons/ri';

const iconCSS = css`
    width: 24px;
    height: 24px;
    margin-right: 4px;
`;

const iconCSS2 = css`
    width: 16px;
    height: 16px;
    margin-right: 4px;
`;

const iconCSS3 = css`
    width: 14px;
    height: 14px;
    margin-right: 4px;
`;

export const LocalIcon = styled(RiMapPinLine)`
    ${iconCSS2}
    color: var(--color-link);
`;

export const CompanyIcon = styled(RiBuildingLine)`
    ${iconCSS2}
`;

export const UniversityIcon = styled(RiBankLine)`
    ${iconCSS2}
`;

export const WriteIcon = styled(BsPencilSquare)`
    width: 20px;
    height: 20px;
    color: var(--color-gray-light2);
`;

export const CameraIcon = styled(AiOutlineCamera)`
    ${iconCSS}
    color: var(--color-gray-light2);
    margin-right: 0;
`;

export const VideoCameraIcon = styled(AiOutlineVideoCamera)`
    ${iconCSS}
    color: var(--color-gray-light2);
    margin-right: 0;
`;

export const AlarmIcon = styled(RiAlarmLine)`
    ${iconCSS3}
`;

export const LockIcon = styled(RiLockFill)`
    ${iconCSS3}
`;

export const ArrowIcon = styled(RiArrowDownSLine)`
    ${iconCSS2}
`;

export const LikeIcon = styled(AiOutlineLike)`
    ${iconCSS}
`;

export const LikeIcon2 = styled(AiOutlineLike)`
    ${iconCSS2}
`;

export const CommentIcon = styled(RiMessage2Line)`
    ${iconCSS}
`;

export const ShareIcon = styled(RiShareForwardLine)`
    ${iconCSS}
`;
