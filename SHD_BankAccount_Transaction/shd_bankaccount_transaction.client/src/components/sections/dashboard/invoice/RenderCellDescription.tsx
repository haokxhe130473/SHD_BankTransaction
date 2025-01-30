import { Stack, Typography } from '@mui/material';
import { GridCellParams } from '@mui/x-data-grid';
import Image from '../../../../components/base/Image';

type ParamsProps = {
  params: GridCellParams;
};

const RenderCellDescription = ({ params }: ParamsProps) => {
  return (
    <Stack direction="row" alignItems="center" gap={1} sx={{ pl: 0.6, py: 2, width: 1 }}>
      {params.row.description.revenue === 'down' ? (
        <Image
          src={"/src/assets/increment.svg"}
          alt="expense"
          sx={{ width: { xs: 18, lg: 30 }, height: { xs: 18, lg: 30 } }}
        />
      ) : (
        <Image
          src={"/src/assets/decrement.svg"}
          alt="income"
          sx={{ width: { xs: 18, lg: 30 }, height: { xs: 18, lg: 30 } }}
        />
      )}
      <Typography>{params.row.description.title}</Typography>
    </Stack>
  );
};

export default RenderCellDescription;
