const stylePresets = {};

stylePresets['centeredFlexBox'] = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
};

stylePresets['removeLinkDecor'] = {
    textDecoration: 'none',
    color: 'inherit',
};

module.exports = { ...stylePresets };
