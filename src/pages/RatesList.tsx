import { useEffect, useState } from 'react'
import styled from "styled-components";
import MUIDataTable, { MUIDataTableOptions, MUIDataTableColumnDef } from "mui-datatables";
import { getExchangeRates, GetExchangeRatesDataType } from '../constant/APIs';
import CustomBackdrop from '../components/CustomBackdrop/CustomBackdrop';
import CustomSnackbar, { SupportMessageType } from '../components/CustomSnackbar/CustomSnackbar';

const Main = styled.main`
padding: 20px 20px 0px 20px;
`;
const AppBar = styled.div`
background-color:#4051b6;
display: flex;
height:50px;
box-shadow: 0px 1px #403d3d;
`;
const Tab = styled.div`
color:white;
min-width:150px;
border-bottom:2px solid red;
display:flex;
justify-content:center;
align-items:center;
cursor: pointer;
`;

const RatesList = () => {

    const [tableData, setTableData] = useState<Array<Array<string>>>([])
    const [isLoading, setIsLoading] = useState(false)
    const [snackbarState, setSnackbarState] = useState({
        open: false,
        message: '',
        messageType: 'success' as SupportMessageType
    })

    useEffect(() => {
        setIsLoading(true)
        getExchangeRates()
            .then((response) => response.json())
            .then((data: GetExchangeRatesDataType) => {
                const _tableData = Object.values(data.rates).map(({ name, type, unit, value }) => [name, type, unit, value]);
                setTableData(_tableData)
            })
            .catch(() => {
                setSnackbarState({
                    open: true,
                    message: 'Fetch data fail.',
                    messageType: 'error'
                })
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    const columns: MUIDataTableColumnDef[] = ["Name", "Type", "Unit", "Value"]
    const options: MUIDataTableOptions = {
        filter: true,
        filterType: "dropdown",
        responsive: 'vertical',
        tableBodyHeight: 'auto',
        rowsPerPageOptions: [5, 10, 15, 20],
        rowsPerPage: 5,
    };

    return (
        <>
            <AppBar>
                <Tab>
                    RATES LIST
                </Tab>
            </AppBar>
            <Main>
                <MUIDataTable
                    title={"Rates"}
                    data={tableData}
                    columns={columns}
                    options={options}
                />
            </Main>
            <CustomBackdrop open={isLoading} />
            <CustomSnackbar
                open={snackbarState.open}
                handelClose={(_event, reason) => {
                    if (reason === 'clickaway') {
                        return;
                    }
                    setSnackbarState(state => ({ ...state, open: false }))
                }}
                message={snackbarState.message}
                messageType={snackbarState.messageType}
            />
        </>
    )
}

export default RatesList;