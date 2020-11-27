const size = {
    xs: '640px',
    sm: '768px',
    lg: '1024px',
   }
const device = {
    xs: `(max-width: ${size.xs})`,
    sm: `(max-width: ${size.sm})`,
    lg: `(min-width: ${size.lg})`
}

const breakpoint = {size, device};

export default breakpoint;