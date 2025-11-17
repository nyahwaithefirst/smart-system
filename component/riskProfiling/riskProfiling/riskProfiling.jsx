import styles from "./riskProfiling.module.css";
import AsyncSelect from "react-select/async";

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: "white",
        border: "1px solid lightgray",
        borderRadius: "7px",
        color: "#111",
        "&:hover": {
            borderColor: "darkgray",
        },
    }),
    input: (provided) => ({
        ...provided,
        color: "#111", //Fixes the input text color
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: "white",
        color: "#111",
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? "white" : "white",
        color: "#111",
    }),
    singleValue: (provided) => ({
        ...provided,
        color: "#111",
    }),
};

export default function RiskProfilingComponent() {

    const customerTypes = [
        { value: "ASSOCIATION/SOCIETY", label: "ASSOCIATION/SOCIETY", weight: 2 },
        { value: "CLOSE CORPORATE", label: "CLOSE CORPORATE", weight: 1 },
        { value: "CLUBS", label: "CLUBS", weight: 2 },
        { value: "COOPERATIVE COMPANY", label: "COOPERATIVE COMPANY", weight: 5 },
        { value: "CO-OPERATIVES", label: "CO-OPERATIVES", weight: 3 },
        { value: "CORRESPONDENT BANK", label: "CORRESPONDENT BANK", weight: 4 },
        { value: "EMBASSY & CONSULATE", label: "EMBASSY & CONSULATE", weight: 4 },
        { value: "ESTATE", label: "ESTATE", weight: 3 },
        { value: "ESTATE AC", label: "ESTATE AC", weight: 2 },
        { value: "FOREIGN COMPANY", label: "FOREIGN COMPANY", weight: 5 },
        { value: "FOREIGN NATIONALS", label: "FOREIGN NATIONALS", weight: 3 },
        { value: "GOVERNMENT (AGENCY)", label: "GOVERNMENT (AGENCY)", weight: 1 },
        { value: "GOVERNMENT (CONSULATE)", label: "GOVERNMENT (CONSULATE)", weight: 1 },
        { value: "GOVERNMENT (MULTINATIONAL/REGIONAL DEVELOPMENT BANK, SUPRANATIONAL ORGANIZATION)", label: "GOVERNMENT (MULTINATIONAL/REGIONAL DEVELOPMENT BANK, SUPRANATIONAL ORGANIZATION)", weight: 1 },
        { value: "GOVERNMENT (MUNICIPALITY)", label: "GOVERNMENT (MUNICIPALITY)", weight: 1 },
        { value: "GOVERNMENT (STATE-OWNED BODY)", label: "GOVERNMENT (STATE-OWNED BODY)", weight: 1 },
        { value: "INDIVIDUAL PERSON", label: "INDIVIDUAL PERSON", weight: 1 },
        { value: "LISTED / PUBLIC LIMITED COMPANY (RECOGNISED STOCK EXCHANGE)", label: "LISTED / PUBLIC LIMITED COMPANY (RECOGNISED STOCK EXCHANGE)", weight: 1 },
        { value: "MINOR CHILD", label: "MINOR CHILD", weight: 1 },
        { value: "NON-LISTED COMPANY CLIENT", label: "NON-LISTED COMPANY CLIENT", weight: 3 },
        { value: "NON-PROFIT CO (NPC)", label: "NON-PROFIT CO (NPC)", weight: 4 },
        { value: "OTHER LEGAL ENTITY", label: "OTHER LEGAL ENTITY", weight: 3 },
        { value: "PARTNERSHIP/SYNDICATE/JOINT VENTURE/ASSOCIATION", label: "PARTNERSHIP/SYNDICATE/JOINT VENTURE/ASSOCIATION", weight: 3 },
        { value: "PARTNERSHIPS", label: "PARTNERSHIPS", weight: 2 },
        { value: "PRIVATE INVESTMENT COMPANY (PIC)", label: "PRIVATE INVESTMENT COMPANY (PIC)", weight: 5 },
        { value: "PVT BUSINESS CORPORATION/SOLE PROPRIETARY", label: "PVT BUSINESS CORPORATION/SOLE PROPRIETARY", weight: 3 },
        { value: "PVT LIMITED COMPANY", label: "PVT LIMITED COMPANY", weight: 3 },
        { value: "RELIGIOUS BODY", label: "RELIGIOUS BODY", weight: 4 },
        { value: "SPV / SPE / SPECIAL INVESTMENT VEHICLE", label: "SPV / SPE / SPECIAL INVESTMENT VEHICLE", weight: 5 },
        { value: "STATE OWNED ENTERPRISE", label: "STATE OWNED ENTERPRISE", weight: 4 },
        { value: "TRUST INTER VIVOS", label: "TRUST INTER VIVOS", weight: 4 },
        { value: "TRUSTS", label: "TRUSTS", weight: 4 },
        { value: "UNKNOWN COMPANY TYPE", label: "UNKNOWN COMPANY TYPE", weight: 5 }
    ];

    const industries = [
        { value: "ACCEPTING HOUSES", label: "ACCEPTING HOUSES", weight: 3 },
        { value: "ACCOUNTING", label: "ACCOUNTING", weight: 3 },
        { value: "AIR TRANSPORT", label: "AIR TRANSPORT", weight: 1 },
        { value: "AMUSEMENT & CATERING", label: "AMUSEMENT & CATERING", weight: 1 },
        { value: "AUDITING", label: "AUDITING", weight: 3 },
        { value: "BEER, WINE & SPIRITS (EXCL GRADING)", label: "BEER, WINE & SPIRITS (EXCL GRADING)", weight: 1 },
        { value: "BETTING AND GAMBLING", label: "BETTING AND GAMBLING", weight: 4 },
        { value: "BEVERAGES", label: "BEVERAGES", weight: 1 },
        { value: "BROADCASTING", label: "BROADCASTING", weight: 1 },
        { value: "BUILDING CONTRACTORS", label: "BUILDING CONTRACTORS", weight: 1 },
        { value: "BUILDING SOCIETIES", label: "BUILDING SOCIETIES", weight: 4 },
        { value: "CHROME", label: "CHROME", weight: 4 },
        { value: "CIVIL ENGINEERING CONTRACTORS", label: "CIVIL ENGINEERING CONTRACTORS", weight: 1 },
        { value: "CLOTHING/FOOTWEAR", label: "CLOTHING/FOOTWEAR", weight: 1 },
        { value: "COMMERCIAL BANKS", label: "COMMERCIAL BANKS", weight: 3 },
        { value: "DAIRY", label: "DAIRY", weight: 1 },
        { value: "DEPARTMENTAL STORES", label: "DEPARTMENTAL STORES", weight: 1 },
        { value: "DISCOUNT HOUSES", label: "DISCOUNT HOUSES", weight: 3 },
        { value: "EDUCATION", label: "EDUCATION", weight: 1 },
        { value: "ENERGY", label: "ENERGY", weight: 2 },
        { value: "ENTERTAINMENT", label: "ENTERTAINMENT", weight: 2 },
        { value: "FARMING", label: "FARMING", weight: 1 },
        { value: "FERTILISERS INSECTICIDES PESTICIDES", label: "FERTILISERS INSECTICIDES PESTICIDES", weight: 3 },
        { value: "FINANCE", label: "FINANCE", weight: 3 },
        { value: "FINANCIAL TECHNOLOGY", label: "FINANCIAL TECHNOLOGY", weight: 4 },
        { value: "FISHING", label: "FISHING", weight: 2 },
        { value: "FORESTRY AND WILDLIFE", label: "FORESTRY AND WILDLIFE", weight: 1 },
        { value: "GOVERNMENT", label: "GOVERNMENT", weight: 3 },
        { value: "HORTICULTURE", label: "HORTICULTURE", weight: 1 },
        { value: "HOSPITALITY", label: "HOSPITALITY", weight: 2 },
        { value: "INDUSTRIAL AND HEAVY EQUIPMENT", label: "INDUSTRIAL AND HEAVY EQUIPMENT", weight: 2 },
        { value: "INSURANCE COMPANIES", label: "INSURANCE COMPANIES", weight: 3 },
        { value: "INFORMATION TECHNOLOGY", label: "INFORMATION TECHNOLOGY", weight: 2 },
        { value: "LEGAL", label: "LEGAL", weight: 4 },
        { value: "LIVESTOCK", label: "LIVESTOCK", weight: 1 },
        { value: "LOCAL AUTHORITIES (INC MUNICIPAL)", label: "LOCAL AUTHORITIES (INC MUNICIPAL)", weight: 4 },
        { value: "LOGISTICS AND TRANSPORTATION", label: "LOGISTICS AND TRANSPORTATION", weight: 3 },
        { value: "MANUFACTURING", label: "MANUFACTURING", weight: 4 },
        { value: "MEDICAL PROFESSIONS AND HEALTHCARE", label: "MEDICAL PROFESSIONS AND HEALTHCARE", weight: 2 },
        { value: "MINING (OTHER)", label: "MINING (OTHER)", weight: 4 },
        { value: "MINING HOUSES", label: "MINING HOUSES", weight: 4 },
        { value: "MINING PRECIOUS METALS", label: "MINING PRECIOUS METALS", weight: 4 },
        { value: "MOTOR TRADE (CAR DEALERS)", label: "MOTOR TRADE (CAR DEALERS)", weight: 3 },
        { value: "NON-PROFIT AND CHARITABLE", label: "NON-PROFIT AND CHARITABLE", weight: 4 },
        { value: "PENSION & PROVIDENT FUNDS", label: "PENSION & PROVIDENT FUNDS", weight: 3 },
        { value: "POULTRY", label: "POULTRY", weight: 1 },
        { value: "PRECIOUS STONES AND METALS (E.G. EMERALDS)", label: "PRECIOUS STONES AND METALS (E.G. EMERALDS)", weight: 4 },
        { value: "PRINTING AND PUBLISHING", label: "PRINTING AND PUBLISHING", weight: 1 },
        { value: "PROFESSIONAL SERVICES", label: "PROFESSIONAL SERVICES", weight: 3 },
        { value: "REAL ESTATE", label: "REAL ESTATE", weight: 4 },
        { value: "RETAILERS", label: "RETAILERS", weight: 1 },
        { value: "ROAD HAULAGE", label: "ROAD HAULAGE", weight: 1 },
        { value: "SALES AND MARKETING", label: "SALES AND MARKETING", weight: 2 },
        { value: "SECURITY BROKERS & DEALERS", label: "SECURITY BROKERS & DEALERS", weight: 3 },
        { value: "SOAPS TOILETRIES & PHARMACEUTICALS", label: "SOAPS TOILETRIES & PHARMACEUTICALS", weight: 2 },
        { value: "SPORTING", label: "SPORTING", weight: 3 },
        { value: "TELECOMMUNICATIONS", label: "TELECOMMUNICATIONS", weight: 1 },
        { value: "TOBACCO", label: "TOBACCO", weight: 3 },
        { value: "TOURISM", label: "TOURISM", weight: 4 },
        { value: "TRUST COMPANIES & EXECUTORS", label: "TRUST COMPANIES & EXECUTORS", weight: 4 },
        { value: "UNKNOWN", label: "UNKNOWN", weight: 4 },
        { value: "WHOLESALERS", label: "WHOLESALERS", weight: 3 }
    ];

    const occupations = [
        { value: "ACCOUNTANT", label: "ACCOUNTANT", weight: 2 },
        { value: "ACTUARY", label: "ACTUARY", weight: 2 },
        { value: "ADMINISTRATOR", label: "ADMINISTRATOR", weight: 1 },
        { value: "ADVOCATE", label: "ADVOCATE", weight: 3 },
        { value: "AIRLINE CABIN STAFF", label: "AIRLINE CABIN STAFF", weight: 4 },
        { value: "AIRLINE PILOT", label: "AIRLINE PILOT", weight: 3 },
        { value: "AMBULANCE PERSON", label: "AMBULANCE PERSON", weight: 1 },
        { value: "AMUSEMENT & RECREATION", label: "AMUSEMENT & RECREATION", weight: 3 },
        { value: "ANAESTHETIST", label: "ANAESTHETIST", weight: 1 },
        { value: "ANALYST", label: "ANALYST", weight: 1 },
        { value: "ANIMAL FARMING OCCUPATIONS", label: "ANIMAL FARMING OCCUPATIONS", weight: 1 },
        { value: "APPRENTICE", label: "APPRENTICE", weight: 1 },
        { value: "ARCHITECT", label: "ARCHITECT", weight: 1 },
        { value: "AROMATHERAPIST", label: "AROMATHERAPIST", weight: 1 },
        { value: "ARTICLED CLERK", label: "ARTICLED CLERK", weight: 1 },
        { value: "ARTISAN", label: "ARTISAN", weight: 1 },
        { value: "ARTIST", label: "ARTIST", weight: 1 },
        { value: "ATTACHE FOR EMBASSY", label: "ATTACHE FOR EMBASSY", weight: 4 },
        { value: "ATTORNEY", label: "ATTORNEY", weight: 4 },
        { value: "AUDITOR", label: "AUDITOR", weight: 3 },
        { value: "BAKERY WORKER", label: "BAKERY WORKER", weight: 1 },
        { value: "BANKER", label: "BANKER", weight: 2 },
        { value: "BARMAN/MAID", label: "BARMAN/MAID", weight: 1 },
        { value: "BEAUTICIAN", label: "BEAUTICIAN", weight: 1 },
        { value: "BIOLOGIST", label: "BIOLOGIST", weight: 1 },
        { value: "BOILERMAKER", label: "BOILERMAKER", weight: 1 },
        { value: "BOOKKEEPER", label: "BOOKKEEPER", weight: 2 },
        { value: "BOOKMAKER", label: "BOOKMAKER", weight: 4 },
        { value: "BREWER", label: "BREWER", weight: 1 },
        { value: "BRICKLAYER", label: "BRICKLAYER", weight: 1 },
        { value: "BROKER", label: "BROKER", weight: 3 },
        { value: "BUILDER", label: "BUILDER", weight: 1 },
        { value: "BUILDING CONTRACTOR", label: "BUILDING CONTRACTOR", weight: 1 },
        { value: "BUILDING INSPECTOR", label: "BUILDING INSPECTOR", weight: 1 },
        { value: "BUSINESS CONSULTANT", label: "BUSINESS CONSULTANT", weight: 2 },
        { value: "BUTCHER", label: "BUTCHER", weight: 1 },
        { value: "BUYER", label: "BUYER", weight: 3 },
        { value: "CAMERA OPERATOR", label: "CAMERA OPERATOR", weight: 1 },
        { value: "CARETAKER", label: "CARETAKER", weight: 1 },
        { value: "CARPENTER", label: "CARPENTER", weight: 1 },
        { value: "CASHIER", label: "CASHIER", weight: 2 },
        { value: "CASINO DEALER", label: "CASINO DEALER", weight: 4 },
        { value: "CATERER", label: "CATERER", weight: 1 },
        { value: "CHAIRMAN(EXEC)", label: "CHAIRMAN(EXEC)", weight: 3 },
        { value: "CHARTERED ACCOUNTANT", label: "CHARTERED ACCOUNTANT", weight: 3 },
        { value: "CHAUFFEUR", label: "CHAUFFEUR", weight: 1 },
        { value: "CHEF", label: "CHEF", weight: 1 },
        { value: "CHEMICAL ENGINEER", label: "CHEMICAL ENGINEER", weight: 4 },
        { value: "CHEMIST", label: "CHEMIST", weight: 3 },
        { value: "CIVIL ENGINEER", label: "CIVIL ENGINEER", weight: 1 },
        { value: "CIVIL SERVANT - CLERICAL", label: "CIVIL SERVANT - CLERICAL", weight: 2 },
        { value: "CIVIL SERVANT - EXECUTIVE", label: "CIVIL SERVANT - EXECUTIVE", weight: 4 },
        { value: "CIVIL SERVANT - MANAGERIAL", label: "CIVIL SERVANT - MANAGERIAL", weight: 3 },
        { value: "CIVIL SERVANT - NON MANAGERIAL", label: "CIVIL SERVANT - NON MANAGERIAL", weight: 1 },
        { value: "CLEANER", label: "CLEANER", weight: 1 },
        { value: "CLERICAL", label: "CLERICAL", weight: 1 },
        { value: "CLERK", label: "CLERK", weight: 1 },
        { value: "CLINICAL TEACHER", label: "CLINICAL TEACHER", weight: 1 },
        { value: "COMMISSIONED OFFICER", label: "COMMISSIONED OFFICER", weight: 4 },
        { value: "COMPANY SECRETARY (EXEC)", label: "COMPANY SECRETARY (EXEC)", weight: 3 },
        { value: "COMPUTER ANALYST", label: "COMPUTER ANALYST", weight: 1 },
        { value: "COMPUTER ENGINEER", label: "COMPUTER ENGINEER", weight: 3 },
        { value: "COMPUTER OPERATOR", label: "COMPUTER OPERATOR", weight: 1 },
        { value: "COMPUTER PROGRAMMER", label: "COMPUTER PROGRAMMER", weight: 3 },
        { value: "CONSULTANT", label: "CONSULTANT", weight: 1 },
        { value: "COOK", label: "COOK", weight: 1 },
        { value: "COUNSELLOR", label: "COUNSELLOR", weight: 1 },
        { value: "CRAFTSMAN", label: "CRAFTSMAN", weight: 1 },
        { value: "CREDIT CONTROLLER", label: "CREDIT CONTROLLER", weight: 2 },
        { value: "CREDITORS CLERK", label: "CREDITORS CLERK", weight: 1 },
        { value: "CURTAIN MAKER", label: "CURTAIN MAKER", weight: 1 },
        { value: "CUSTOMS OFFICER", label: "CUSTOMS OFFICER", weight: 5 },
        { value: "DATA CAPTURER", label: "DATA CAPTURER", weight: 1 },
        { value: "DEFENSE FORCE", label: "DEFENSE FORCE", weight: 5 },
        { value: "DENTIST", label: "DENTIST", weight: 1 },
        { value: "DESIGNER", label: "DESIGNER", weight: 1 },
        { value: "DETECTIVE", label: "DETECTIVE", weight: 2 },
        { value: "DIRECTOR", label: "DIRECTOR", weight: 3 },
        { value: "DIRECTOR (LISTED CO)", label: "DIRECTOR (LISTED CO)", weight: 3 },
        { value: "DISC JOCKEY", label: "DISC JOCKEY", weight: 1 },
        { value: "DOCTOR", label: "DOCTOR", weight: 1 },
        { value: "DOMESTIC HELPER/MAID", label: "DOMESTIC HELPER/MAID", weight: 1 },
        { value: "DRAUGHTSMAN", label: "DRAUGHTSMAN", weight: 1 },
        { value: "DRIVER", label: "DRIVER", weight: 1 },
        { value: "DRIVING INSTRUCTOR", label: "DRIVING INSTRUCTOR", weight: 1 },
        { value: "DRY CLEANER", label: "DRY CLEANER", weight: 1 },
        { value: "ECONOMIST", label: "ECONOMIST", weight: 1 },
        { value: "EDITOR", label: "EDITOR", weight: 1 },
        { value: "ELECTRICAL ENGINEER", label: "ELECTRICAL ENGINEER", weight: 1 },
        { value: "ELECTRICIAN", label: "ELECTRICIAN", weight: 1 },
        { value: "ENGINEER", label: "ENGINEER", weight: 1 },
        { value: "ENTERTAINMENT SPECIALIST", label: "ENTERTAINMENT SPECIALIST", weight: 1 },
        { value: "ESTATE AGENT", label: "ESTATE AGENT", weight: 4 },
        { value: "EXCAVATOR", label: "EXCAVATOR", weight: 1 },
        { value: "EXECUTIVE MANAGEMENT", label: "EXECUTIVE MANAGEMENT", weight: 3 },
        { value: "EXTRACTION OF MINERALS", label: "EXTRACTION OF MINERALS", weight: 3 },
        { value: "FACTORY WORKER", label: "FACTORY WORKER", weight: 1 },
        { value: "FARM WORKER", label: "FARM WORKER", weight: 1 },
        { value: "FARMER", label: "FARMER", weight: 2 },
        { value: "FASHION DESIGNER", label: "FASHION DESIGNER", weight: 1 },
        { value: "FILM DIRECTOR", label: "FILM DIRECTOR", weight: 1 },
        { value: "FINANCIAL ADVISOR", label: "FINANCIAL ADVISOR", weight: 2 },
        { value: "FIREMAN", label: "FIREMAN", weight: 1 },
        { value: "FISHERMAN", label: "FISHERMAN", weight: 1 },
        { value: "FITTER/TURNER", label: "FITTER/TURNER", weight: 1 },
        { value: "FLORIST", label: "FLORIST", weight: 1 },
        { value: "FORESTRY OCCUPATIONS", label: "FORESTRY OCCUPATIONS", weight: 1 },
        { value: "GAME WARDEN", label: "GAME WARDEN", weight: 3 },
        { value: "GARAGE ATTENDANT", label: "GARAGE ATTENDANT", weight: 1 },
        { value: "GARDENER", label: "GARDENER", weight: 1 },
        { value: "GENERAL MANAGER (EXEC)", label: "GENERAL MANAGER (EXEC)", weight: 3 },
        { value: "GENERAL MANAGER (NON-EXEC)", label: "GENERAL MANAGER (NON-EXEC)", weight: 3 },
        { value: "GENERAL WORKER", label: "GENERAL WORKER", weight: 1 },
        { value: "GEOLOGIST", label: "GEOLOGIST", weight: 1 },
        { value: "GEOTECHNICAL ENGINEER", label: "GEOTECHNICAL ENGINEER", weight: 1 },
        { value: "GRAPHIC DESIGNER", label: "GRAPHIC DESIGNER", weight: 1 },
        { value: "GROUNDSMAN", label: "GROUNDSMAN", weight: 1 },
        { value: "GYNAECOLOGIST", label: "GYNAECOLOGIST", weight: 1 },
        { value: "HAIRDRESSER", label: "HAIRDRESSER", weight: 1 },
        { value: "HANDYMAN", label: "HANDYMAN", weight: 1 },
        { value: "HAWKER", label: "HAWKER", weight: 1 },
        { value: "HEADMASTER", label: "HEADMASTER", weight: 1 },
        { value: "HORSE TRAINER", label: "HORSE TRAINER", weight: 1 },
        { value: "HORTICULTURIST", label: "HORTICULTURIST", weight: 1 },
        { value: "HOSPITAL WORK/NURSE", label: "HOSPITAL WORK/NURSE", weight: 1 },
        { value: "HOTELIER", label: "HOTELIER", weight: 1 },
        { value: "HOUSEKEEPER", label: "HOUSEKEEPER", weight: 1 },
        { value: "HOUSEWIFE", label: "HOUSEWIFE", weight: 1 },
        { value: "HUNTING/TRAPPING", label: "HUNTING/TRAPPING", weight: 3 },
        { value: "HYDROLOGIST", label: "HYDROLOGIST", weight: 1 },
        { value: "HYGIENE CLEANER", label: "HYGIENE CLEANER", weight: 1 },
        { value: "IMPORT/EXPORT TRADER", label: "IMPORT/EXPORT TRADER", weight: 3 },
        { value: "INSPECTOR", label: "INSPECTOR", weight: 1 },
        { value: "INSTRUCTOR", label: "INSTRUCTOR", weight: 1 },
        { value: "INSURANCE BROKER", label: "INSURANCE BROKER", weight: 3 },
        { value: "INTERIOR DECORATOR", label: "INTERIOR DECORATOR", weight: 1 },
        { value: "JEWELLER", label: "JEWELLER", weight: 4 },
        { value: "JOURNALIST", label: "JOURNALIST", weight: 1 },
        { value: "JUDGE", label: "JUDGE", weight: 5 },
        { value: "LABORATORY ASSISTANT", label: "LABORATORY ASSISTANT", weight: 2 },
        { value: "LABOURER", label: "LABOURER", weight: 1 },
        { value: "LAND SURVEYOR", label: "LAND SURVEYOR", weight: 1 },
        { value: "LAWYER", label: "LAWYER", weight: 4 },
        { value: "LEATHER/TXTLE PROD", label: "LEATHER/TXTLE PROD", weight: 2 },
        { value: "LECTURER", label: "LECTURER", weight: 1 },
        { value: "LIBRARIAN", label: "LIBRARIAN", weight: 1 },
        { value: "MAGISTRATE", label: "MAGISTRATE", weight: 5 },
        { value: "MARKETING AGENT", label: "MARKETING AGENT", weight: 1 },
        { value: "MARKETING EXECUTIVE", label: "MARKETING EXECUTIVE", weight: 1 },
        { value: "MATRON", label: "MATRON", weight: 1 },
        { value: "MECHANIC", label: "MECHANIC", weight: 1 },
        { value: "MECHANICAL ENGINEER", label: "MECHANICAL ENGINEER", weight: 1 },
        { value: "MEDICAL REP", label: "MEDICAL REP", weight: 1 },
        { value: "MEDICAL RESEARCHER", label: "MEDICAL RESEARCHER", weight: 1 },
        { value: "MEDICAL SPECIALIST", label: "MEDICAL SPECIALIST", weight: 1 },
        { value: "MEMBER OF PARLIAMENT", label: "MEMBER OF PARLIAMENT", weight: 5 },
        { value: "MESSENGER", label: "MESSENGER", weight: 1 },
        { value: "METAL FABRICATING", label: "METAL FABRICATING", weight: 1 },
        { value: "METAL MACHINING OCCUPATIONS", label: "METAL MACHINING OCCUPATIONS", weight: 1 },
        { value: "METALLURGIST", label: "METALLURGIST", weight: 1 },
        { value: "MIDWIFE", label: "MIDWIFE", weight: 1 },
        { value: "MINER", label: "MINER", weight: 1 },
        { value: "MINING ENGINEER", label: "MINING ENGINEER", weight: 1 },
        { value: "MINISTER OF RELIGION", label: "MINISTER OF RELIGION", weight: 3 },
        { value: "MINOR", label: "MINOR", weight: 1 },
        { value: "MOTOR FREIGHT OCCUPATIONS", label: "MOTOR FREIGHT OCCUPATIONS", weight: 1 },
        { value: "MUSICIAN", label: "MUSICIAN", weight: 1 },
        { value: "NANNY", label: "NANNY", weight: 1 },
        { value: "NETWORK SPECIALIST", label: "NETWORK SPECIALIST", weight: 2 },
        { value: "NIGHT WATCHMAN", label: "NIGHT WATCHMAN", weight: 1 },
        { value: "NON WORKING", label: "NON WORKING", weight: 2 },
        { value: "NURSE", label: "NURSE", weight: 1 },
        { value: "NUTRITIONIST", label: "NUTRITIONIST", weight: 1 },
        { value: "OPTICIAN", label: "OPTICIAN", weight: 1 },
        { value: "ORTHODONTIST", label: "ORTHODONTIST", weight: 1 },
        { value: "PACKAGING AND MATERIALS HANDLI", label: "PACKAGING AND MATERIALS HANDLI", weight: 4 },
        { value: "PACKER", label: "PACKER", weight: 1 },
        { value: "PAINTER", label: "PAINTER", weight: 1 },
        { value: "PANEL BEATER", label: "PANEL BEATER", weight: 2 },
        { value: "PARAMEDIC", label: "PARAMEDIC", weight: 1 },
        { value: "PASTOR", label: "PASTOR", weight: 1 },
        { value: "PATHOLOGIST", label: "PATHOLOGIST", weight: 1 },
        { value: "PEDIATRICIAN", label: "PEDIATRICIAN", weight: 1 },
        { value: "PENSIONER", label: "PENSIONER", weight: 1 },
        { value: "PERSONAL ASSISTANT", label: "PERSONAL ASSISTANT", weight: 1 },
        { value: "PERSONNEL OFFICER", label: "PERSONNEL OFFICER", weight: 1 },
        { value: "PETROL STN ATTENDANT", label: "PETROL STN ATTENDANT", weight: 1 },
        { value: "PHARMACIST", label: "PHARMACIST", weight: 1 },
        { value: "PHOTOGRAPHER", label: "PHOTOGRAPHER", weight: 1 },
        { value: "PHYSICIAN", label: "PHYSICIAN", weight: 1 },
        { value: "PHYSIOTHERAPIST", label: "PHYSIOTHERAPIST", weight: 1 },
        { value: "PILOT", label: "PILOT", weight: 3 },
        { value: "PLANT FARMING OCCUPATIONS", label: "PLANT FARMING OCCUPATIONS", weight: 1 },
        { value: "PLANT FOREMAN", label: "PLANT FOREMAN", weight: 1 },
        { value: "PLASTERER", label: "PLASTERER", weight: 1 },
        { value: "PLUMBER", label: "PLUMBER", weight: 1 },
        { value: "POLICE", label: "POLICE", weight: 4 },
        { value: "PORTER", label: "PORTER", weight: 1 },
        { value: "PREACHER", label: "PREACHER", weight: 1 },
        { value: "PRIEST", label: "PRIEST", weight: 1 },
        { value: "PRINCIPAL", label: "PRINCIPAL", weight: 1 },
        { value: "PRINTING OCCUPATIONS", label: "PRINTING OCCUPATIONS", weight: 1 },
        { value: "PRISON WARDER", label: "PRISON WARDER", weight: 2 },
        { value: "PRODUCER", label: "PRODUCER", weight: 1 },
        { value: "PROFESSIONAL", label: "PROFESSIONAL", weight: 4 },
        { value: "PROFESSOR", label: "PROFESSOR", weight: 1 },
        { value: "PROGRAMMER", label: "PROGRAMMER", weight: 1 },
        { value: "PROJECT LEADER", label: "PROJECT LEADER", weight: 1 },
        { value: "PROJECT MANAGER", label: "PROJECT MANAGER", weight: 1 },
        { value: "PROJECT PLANNER", label: "PROJECT PLANNER", weight: 1 },
        { value: "PROPERTY CONSULTANT", label: "PROPERTY CONSULTANT", weight: 3 },
        { value: "PROTECTIVE SERVICE OCCUPATION", label: "PROTECTIVE SERVICE OCCUPATION", weight: 3 },
        { value: "PSYCHOLOGIST", label: "PSYCHOLOGIST", weight: 1 },
        { value: "PUBLICATIONS MANAGER", label: "PUBLICATIONS MANAGER", weight: 1 },
        { value: "QUANTITY SURVEYOR", label: "QUANTITY SURVEYOR", weight: 1 },
        { value: "RADIOGRAPHER", label: "RADIOGRAPHER", weight: 1 },
        { value: "RADIOLOGIST", label: "RADIOLOGIST", weight: 1 },
        { value: "RECEPTIONIST", label: "RECEPTIONIST", weight: 1 },
        { value: "REFLEXOLOGIST", label: "REFLEXOLOGIST", weight: 1 },
        { value: "REFUSE COLLECTOR", label: "REFUSE COLLECTOR", weight: 1 },
        { value: "RESEARCHER", label: "RESEARCHER", weight: 1 },
        { value: "RESTAURATEUR", label: "RESTAURATEUR", weight: 1 },
        { value: "RETIRED", label: "RETIRED", weight: 1 },
        { value: "SALESPERSON", label: "SALESPERSON", weight: 1 },
        { value: "SECRETARY", label: "SECRETARY", weight: 1 },
        { value: "SECURITY GUARD", label: "SECURITY GUARD", weight: 1 },
        { value: "SELF EMPLOYED", label: "SELF EMPLOYED", weight: 3 },
        { value: "SERVICEMAN", label: "SERVICEMAN", weight: 1 },
        { value: "SHAFT TIMBERMAN", label: "SHAFT TIMBERMAN", weight: 1 },
        { value: "SHIFT BOSS", label: "SHIFT BOSS", weight: 1 },
        { value: "SHOPFITTER", label: "SHOPFITTER", weight: 1 },
        { value: "SHOPKEEPER", label: "SHOPKEEPER", weight: 1 },
        { value: "SIGNWRITER", label: "SIGNWRITER", weight: 1 },
        { value: "SMALL BUSINESS OWNER", label: "SMALL BUSINESS OWNER", weight: 2 },
        { value: "SOCIAL WORKER", label: "SOCIAL WORKER", weight: 1 },
        { value: "SOLDIER", label: "SOLDIER", weight: 3 },
        { value: "SPAZA TUCKSHOP OWNER", label: "SPAZA TUCKSHOP OWNER", weight: 1 },
        { value: "SPECIALIST", label: "SPECIALIST", weight: 4 },
        { value: "SPORTS PROFESSIONAL", label: "SPORTS PROFESSIONAL", weight: 2 },
        { value: "SPRAYPAINTER", label: "SPRAYPAINTER", weight: 1 },
        { value: "STAFF CLERK", label: "STAFF CLERK", weight: 1 },
        { value: "STEWARD/STEWARDESS", label: "STEWARD/STEWARDESS", weight: 1 },
        { value: "STOCK CONTROLLER", label: "STOCK CONTROLLER", weight: 1 },
        { value: "STOCKBROKER", label: "STOCKBROKER", weight: 4 },
        { value: "STOREMAN", label: "STOREMAN", weight: 1 },
        { value: "STUDENT", label: "STUDENT", weight: 1 },
        { value: "SUPERINTENDANT", label: "SUPERINTENDANT", weight: 1 },
        { value: "SUPERVISOR", label: "SUPERVISOR", weight: 1 },
        { value: "SUPERVISORY", label: "SUPERVISORY", weight: 1 },
        { value: "SURGEON", label: "SURGEON", weight: 1 },
        { value: "SURVEYOR", label: "SURVEYOR", weight: 1 },
        { value: "TAX CONSULTANT", label: "TAX CONSULTANT", weight: 3 },
        { value: "TAXI OWNER", label: "TAXI OWNER", weight: 3 },
        { value: "TEACHER", label: "TEACHER", weight: 1 },
        { value: "TEAM LEADER", label: "TEAM LEADER", weight: 1 },
        { value: "TECHNICIAN", label: "TECHNICIAN", weight: 1 },
        { value: "TECHNOLOGIST", label: "TECHNOLOGIST", weight: 1 },
        { value: "TELEPHONIST", label: "TELEPHONIST", weight: 1 },
        { value: "TELLER", label: "TELLER", weight: 2 },
        { value: "TEMP CONTRACT WORKER", label: "TEMP CONTRACT WORKER", weight: 1 },
        { value: "TILER", label: "TILER", weight: 1 },
        { value: "TOOLMAKER", label: "TOOLMAKER", weight: 1 },
        { value: "TOWN PLANNER", label: "TOWN PLANNER", weight: 1 },
        { value: "TRAFFIC INSPECTOR", label: "TRAFFIC INSPECTOR", weight: 2 },
        { value: "TRAFFIC OFFICER", label: "TRAFFIC OFFICER", weight: 2 },
        { value: "TRAIN DRIVER", label: "TRAIN DRIVER", weight: 1 },
        { value: "TURNER", label: "TURNER", weight: 1 },
        { value: "TUTOR", label: "TUTOR", weight: 1 },
        { value: "TV PRESENTER", label: "TV PRESENTER", weight: 1 },
        { value: "UNEMPLOYED", label: "UNEMPLOYED", weight: 3 },
        { value: "UROLOGIST", label: "UROLOGIST", weight: 1 },
        { value: "VETERINARIAN", label: "VETERINARIAN", weight: 2 },
        { value: "VETERINARY NURSE", label: "VETERINARY NURSE", weight: 1 },
        { value: "VETERINARY SURGEON", label: "VETERINARY SURGEON", weight: 1 },
        { value: "WAREHOUSE WORKER", label: "WAREHOUSE WORKER", weight: 1 },
        { value: "WELDER", label: "WELDER", weight: 1 },
        { value: "WITCHDOCTOR/SANGOMA/TRADITIONALIST", label: "WITCHDOCTOR/SANGOMA/TRADITIONALIST", weight: 1 },
        { value: "WOOD MACHINING", label: "WOOD MACHINING", weight: 1 },
        { value: "ZOOLOGIST", label: "ZOOLOGIST", weight: 1 }
    ];

    const countries = [
        { value: "Afghanistan", label: "Afghanistan", weight: 5, rank: "High" },
        { value: "Åland Islands", label: "Åland Islands", weight: 5, rank: "High" },
        { value: "Albania", label: "Albania", weight: 5, rank: "High" },
        { value: "Algeria", label: "Algeria", weight: 5, rank: "High" },
        { value: "American Samoa", label: "American Samoa", weight: 1, rank: "Low" },
        { value: "Andorra", label: "Andorra", weight: 5, rank: "High" },
        { value: "Angola", label: "Angola", weight: 5, rank: "High" },
        { value: "Anguilla", label: "Anguilla", weight: 3, rank: "Medium" },
        { value: "Antarctica", label: "Antarctica", weight: 1, rank: "Low" },
        { value: "Antigua and Barbuda", label: "Antigua and Barbuda", weight: 3, rank: "Medium" },
        { value: "Argentina", label: "Argentina", weight: 3, rank: "Medium" },
        { value: "Armenia", label: "Armenia", weight: 1, rank: "Low" },
        { value: "Aruba", label: "Aruba", weight: 3, rank: "Medium" },
        { value: "Australia", label: "Australia", weight: 1, rank: "Low" },
        { value: "Austria", label: "Austria", weight: 1, rank: "Low" },
        { value: "Azerbaijan", label: "Azerbaijan", weight: 5, rank: "High" },
        { value: "Bahamas (the)", label: "Bahamas (the)", weight: 5, rank: "High" },
        { value: "Bahrain", label: "Bahrain", weight: 3, rank: "Medium" },
        { value: "Bangladesh", label: "Bangladesh", weight: 3, rank: "Medium" },
        { value: "Barbados", label: "Barbados", weight: 5, rank: "High" },
        { value: "Belarus", label: "Belarus", weight: 5, rank: "High" },
        { value: "Belgium", label: "Belgium", weight: 1, rank: "Low" },
        { value: "Belize", label: "Belize", weight: 5, rank: "High" },
        { value: "Benin", label: "Benin", weight: 3, rank: "Medium" },
        { value: "Bermuda", label: "Bermuda", weight: 3, rank: "Medium" },
        { value: "Bhutan", label: "Bhutan", weight: 1, rank: "Low" },
        { value: "Bolivia, Plurinational State of", label: "Bolivia, Plurinational State of", weight: 5, rank: "High" },
        { value: "Bonaire, Sint Eustatius and Saba", label: "Bonaire, Sint Eustatius and Saba", weight: 1, rank: "Low" },
        { value: "Bosnia and Herzegovina", label: "Bosnia and Herzegovina", weight: 3, rank: "Medium" },
        { value: "Botswana", label: "Botswana", weight: 1, rank: "Low" },
        { value: "Bouvet Island", label: "Bouvet Island", weight: 1, rank: "Low" },
        { value: "Brazil", label: "Brazil", weight: 3, rank: "Medium" },
        { value: "British Indian Ocean Territory (the)", label: "British Indian Ocean Territory (the)", weight: 1, rank: "Low" },
        { value: "Brunei Darussalam", label: "Brunei Darussalam", weight: 1, rank: "Low" },
        { value: "Bulgaria", label: "Bulgaria", weight: 1, rank: "Low" },
        { value: "Burkina Faso", label: "Burkina Faso", weight: 5, rank: "High" },
        { value: "Burundi", label: "Burundi", weight: 3, rank: "Medium" },
        { value: "Cabo Verde", label: "Cabo Verde", weight: 1, rank: "Low" },
        { value: "Cambodia", label: "Cambodia", weight: 5, rank: "High" },
        { value: "Cameroon", label: "Cameroon", weight: 3, rank: "Medium" },
        { value: "Canada", label: "Canada", weight: 1, rank: "Low" },
        { value: "Cayman Islands (the)", label: "Cayman Islands (the)", weight: 5, rank: "High" },
        { value: "Central African Republic (the)", label: "Central African Republic (the)", weight: 5, rank: "High" },
        { value: "Chad", label: "Chad", weight: 3, rank: "Medium" },
        { value: "Chile", label: "Chile", weight: 1, rank: "Low" },
        { value: "China", label: "China", weight: 3, rank: "Medium" },
        { value: "Christmas Island", label: "Christmas Island", weight: 1, rank: "Low" },
        { value: "Clipperton Island", label: "Clipperton Island", weight: 1, rank: "Low" },
        { value: "Cocos (Keeling) Islands (the)", label: "Cocos (Keeling) Islands (the)", weight: 1, rank: "Low" },
        { value: "Colombia", label: "Colombia", weight: 5, rank: "High" },
        { value: "Comoros", label: "Comoros", weight: 3, rank: "Medium" },
        { value: "Congo", label: "Congo", weight: 3, rank: "Medium" },
        { value: "Congo (the Democratic Republic of the)", label: "Congo (the Democratic Republic of the)", weight: 5, rank: "High" },
        { value: "Cook Islands (the)", label: "Cook Islands (the)", weight: 5, rank: "High" },
        { value: "Costa Rica", label: "Costa Rica", weight: 5, rank: "High" },
        { value: "Côte d'Ivoire", label: "Côte d'Ivoire", weight: 5, rank: "High" },
        { value: "Croatia", label: "Croatia", weight: 1, rank: "Low" },
        { value: "Cuba", label: "Cuba", weight: 5, rank: "High" },
        { value: "Curaçao", label: "Curaçao", weight: 3, rank: "Medium" },
        { value: "Cyprus", label: "Cyprus", weight: 5, rank: "High" },
        { value: "Czech Republic (the)", label: "Czech Republic (the)", weight: 1, rank: "Low" },
        { value: "Denmark", label: "Denmark", weight: 1, rank: "Low" },
        { value: "Djibouti", label: "Djibouti", weight: 1, rank: "Low" },
        { value: "Dominica", label: "Dominica", weight: 3, rank: "Medium" },
        { value: "Dominican Republic (the)", label: "Dominican Republic (the)", weight: 5, rank: "High" },
        { value: "Ecuador", label: "Ecuador", weight: 5, rank: "High" },
        { value: "Egypt", label: "Egypt", weight: 5, rank: "High" },
        { value: "El Salvador", label: "El Salvador", weight: 5, rank: "High" },
        { value: "Equatorial Guinea", label: "Equatorial Guinea", weight: 5, rank: "High" },
        { value: "Eritrea", label: "Eritrea", weight: 5, rank: "High" },
        { value: "Estonia", label: "Estonia", weight: 1, rank: "Low" },
        { value: "Ethiopia", label: "Ethiopia", weight: 5, rank: "High" },
        { value: "Falkland Islands (the) [Malvinas]", label: "Falkland Islands (the) [Malvinas]", weight: 1, rank: "Low" },
        { value: "Faroe Islands (the)", label: "Faroe Islands (the)", weight: 1, rank: "Low" },
        { value: "Fiji", label: "Fiji", weight: 1, rank: "Low" },
        { value: "Finland", label: "Finland", weight: 1, rank: "Low" },
        { value: "France", label: "France", weight: 1, rank: "Low" },
        { value: "French Guiana", label: "French Guiana", weight: 1, rank: "Low" },
        { value: "French Polynesia", label: "French Polynesia", weight: 1, rank: "Low" },
        { value: "French Southern Territories (the)", label: "French Southern Territories (the)", weight: 1, rank: "Low" },
        { value: "Gabon", label: "Gabon", weight: 1, rank: "Low" },
        { value: "Gambia (The)", label: "Gambia (The)", weight: 1, rank: "Low" },
        { value: "Georgia", label: "Georgia", weight: 1, rank: "Low" },
        { value: "Germany", label: "Germany", weight: 1, rank: "Low" },
        { value: "Ghana", label: "Ghana", weight: 1, rank: "Low" },
        { value: "Gibraltar", label: "Gibraltar", weight: 3, rank: "Medium" },
        { value: "Greece", label: "Greece", weight: 1, rank: "Low" },
        { value: "Greenland", label: "Greenland", weight: 1, rank: "Low" },
        { value: "Grenada", label: "Grenada", weight: 5, rank: "High" },
        { value: "Guadeloupe", label: "Guadeloupe", weight: 1, rank: "Low" },
        { value: "Guam", label: "Guam", weight: 1, rank: "Low" },
        { value: "Guatemala", label: "Guatemala", weight: 5, rank: "High" },
        { value: "Guernsey", label: "Guernsey", weight: 3, rank: "Medium" },
        { value: "Guinea", label: "Guinea", weight: 5, rank: "High" },
        { value: "Guinea-Bissau", label: "Guinea-Bissau", weight: 5, rank: "High" },
        { value: "Guyana", label: "Guyana", weight: 1, rank: "Low" },
        { value: "Haiti", label: "Haiti", weight: 5, rank: "High" },
        { value: "Heard Island and McDonald Islands", label: "Heard Island and McDonald Islands", weight: 1, rank: "Low" },
        { value: "Holy See (the) [Vatican City State]", label: "Holy See (the) [Vatican City State]", weight: 1, rank: "Low" },
        { value: "Honduras", label: "Honduras", weight: 5, rank: "High" },
        { value: "Hong Kong", label: "Hong Kong", weight: 3, rank: "Medium" },
        { value: "Hungary", label: "Hungary", weight: 1, rank: "Low" },
        { value: "Iceland", label: "Iceland", weight: 1, rank: "Low" },
        { value: "India", label: "India", weight: 5, rank: "High" },
        { value: "Indonesia", label: "Indonesia", weight: 5, rank: "High" },
        { value: "Iran (the Islamic Republic of)", label: "Iran (the Islamic Republic of)", weight: 5, rank: "High" },
        { value: "Iraq", label: "Iraq", weight: 5, rank: "High" },
        { value: "Ireland", label: "Ireland", weight: 1, rank: "Low" },
        { value: "Isle of Man", label: "Isle of Man", weight: 3, rank: "Medium" },
        { value: "Israel", label: "Israel", weight: 1, rank: "Low" },
        { value: "Italy", label: "Italy", weight: 1, rank: "Low" },
        { value: "Jamaica", label: "Jamaica", weight: 5, rank: "High" },
        { value: "Japan", label: "Japan", weight: 1, rank: "Low" },
        { value: "Jersey", label: "Jersey", weight: 3, rank: "Medium" },
        { value: "Jordan", label: "Jordan", weight: 5, rank: "High" },
        { value: "Kazakhstan", label: "Kazakhstan", weight: 5, rank: "High" },
        { value: "Kenya", label: "Kenya", weight: 5, rank: "High" },
        { value: "Kiribati", label: "Kiribati", weight: 1, rank: "Low" },
        { value: "Korea (the Democratic People's Republic of)", label: "Korea (the Democratic People's Republic of)", weight: 5, rank: "High" },
        { value: "Korea (the Republic of)", label: "Korea (the Republic of)", weight: 3, rank: "Medium" },
        { value: "Kosovo", label: "Kosovo", weight: 1, rank: "Low" },
        { value: "Kuwait", label: "Kuwait", weight: 3, rank: "Medium" },
        { value: "Kyrgyzstan", label: "Kyrgyzstan", weight: 5, rank: "High" },
        { value: "Lao People's Democratic Republic (the)", label: "Lao People's Democratic Republic (the)", weight: 5, rank: "High" },
        { value: "Latvia", label: "Latvia", weight: 5, rank: "High" },
        { value: "Lebanon", label: "Lebanon", weight: 5, rank: "High" },
        { value: "Lesotho", label: "Lesotho", weight: 1, rank: "Low" },
        { value: "Liberia", label: "Liberia", weight: 5, rank: "High" },
        { value: "Libya", label: "Libya", weight: 5, rank: "High" },
        { value: "Liechtenstein", label: "Liechtenstein", weight: 5, rank: "High" },
        { value: "Lithuania", label: "Lithuania", weight: 1, rank: "Low" },
        { value: "Luxembourg", label: "Luxembourg", weight: 3, rank: "Medium" },
        { value: "Macao", label: "Macao", weight: 5, rank: "High" },
        { value: "Macedonia (the former Yugoslav Republic of)", label: "Macedonia (the former Yugoslav Republic of)", weight: 1, rank: "Low" },
        { value: "Madagascar", label: "Madagascar", weight: 1, rank: "Low" },
        { value: "Malawi", label: "Malawi", weight: 1, rank: "Low" },
        { value: "Malaysia", label: "Malaysia", weight: 3, rank: "Medium" },
        { value: "Maldives", label: "Maldives", weight: 1, rank: "Low" },
        { value: "Mali", label: "Mali", weight: 5, rank: "High" },
        { value: "Malta", label: "Malta", weight: 5, rank: "High" },
        { value: "Marshall Islands (the)", label: "Marshall Islands (the)", weight: 5, rank: "High" },
        { value: "Martinique", label: "Martinique", weight: 1, rank: "Low" },
        { value: "Mauritania", label: "Mauritania", weight: 1, rank: "Low" },
        { value: "Mauritius", label: "Mauritius", weight: 3, rank: "Medium" },
        { value: "Mayotte", label: "Mayotte", weight: 1, rank: "Low" },
        { value: "Mexico", label: "Mexico", weight: 5, rank: "High" },
        { value: "Micronesia (the Federated States of)", label: "Micronesia (the Federated States of)", weight: 1, rank: "Low" },
        { value: "Moldova (the Republic of)", label: "Moldova (the Republic of)", weight: 5, rank: "High" },
        { value: "Monaco", label: "Monaco", weight: 5, rank: "High" },
        { value: "Mongolia", label: "Mongolia", weight: 1, rank: "Low" },
        { value: "Montenegro", label: "Montenegro", weight: 3, rank: "Medium" },
        { value: "Montserrat", label: "Montserrat", weight: 3, rank: "Medium" },
        { value: "Morocco", label: "Morocco", weight: 5, rank: "High" },
        { value: "Mozambique", label: "Mozambique", weight: 3, rank: "Medium" },
        { value: "Myanmar", label: "Myanmar", weight: 5, rank: "High" },
        { value: "Namibia", label: "Namibia", weight: 1, rank: "Low" },
        { value: "Nauru", label: "Nauru", weight: 5, rank: "High" },
        { value: "Nepal", label: "Nepal", weight: 1, rank: "Low" },
        { value: "Netherlands (the)", label: "Netherlands (the)", weight: 1, rank: "Low" },
        { value: "New Caledonia", label: "New Caledonia", weight: 1, rank: "Low" },
        { value: "New Zealand", label: "New Zealand", weight: 1, rank: "Low" },
        { value: "Nicaragua", label: "Nicaragua", weight: 5, rank: "High" },
        { value: "Niger (the)", label: "Niger (the)", weight: 1, rank: "Low" },
        { value: "Nigeria", label: "Nigeria", weight: 5, rank: "High" },
        { value: "Niue", label: "Niue", weight: 5, rank: "High" },
        { value: "Norfolk Island", label: "Norfolk Island", weight: 1, rank: "Low" },
        { value: "Northern Mariana Islands (the)", label: "Northern Mariana Islands (the)", weight: 1, rank: "Low" },
        { value: "Norway", label: "Norway", weight: 1, rank: "Low" },
        { value: "Oman", label: "Oman", weight: 1, rank: "Low" },
        { value: "Pakistan", label: "Pakistan", weight: 5, rank: "High" },
        { value: "Palau", label: "Palau", weight: 3, rank: "Medium" },
        { value: "Palestine, State of", label: "Palestine, State of", weight: 5, rank: "High" },
        { value: "Panama", label: "Panama", weight: 5, rank: "High" },
        { value: "Papua New Guinea", label: "Papua New Guinea", weight: 5, rank: "High" },
        { value: "Paracel Islands", label: "Paracel Islands", weight: 5, rank: "High" },
        { value: "Paraguay", label: "Paraguay", weight: 3, rank: "Medium" },
        { value: "Peru", label: "Peru", weight: 5, rank: "High" },
        { value: "Philippines (the)", label: "Philippines (the)", weight: 5, rank: "High" },
        { value: "Pitcairn", label: "Pitcairn", weight: 1, rank: "Low" },
        { value: "Poland", label: "Poland", weight: 1, rank: "Low" },
        { value: "Portugal", label: "Portugal", weight: 1, rank: "Low" },
        { value: "Puerto Rico", label: "Puerto Rico", weight: 1, rank: "Low" },
        { value: "Qatar", label: "Qatar", weight: 1, rank: "Low" },
        { value: "Réunion", label: "Réunion", weight: 1, rank: "Low" },
        { value: "Romania", label: "Romania", weight: 1, rank: "Low" },
        { value: "Russian Federation (the)", label: "Russian Federation (the)", weight: 5, rank: "High" },
        { value: "Rwanda", label: "Rwanda", weight: 1, rank: "Low" },
        { value: "Saint Barthélemy", label: "Saint Barthélemy", weight: 1, rank: "Low" },
        { value: "Saint Helena, Ascension and Tristan da Cunha", label: "Saint Helena, Ascension and Tristan da Cunha", weight: 1, rank: "Low" },
        { value: "Saint Kitts and Nevis", label: "Saint Kitts and Nevis", weight: 5, rank: "High" },
        { value: "Saint Lucia", label: "Saint Lucia", weight: 3, rank: "Medium" },
        { value: "Saint Martin (French part)", label: "Saint Martin (French part)", weight: 1, rank: "Low" },
        { value: "Saint Pierre and Miquelon", label: "Saint Pierre and Miquelon", weight: 1, rank: "Low" },
        { value: "Saint Vincent and the Grenadines", label: "Saint Vincent and the Grenadines", weight: 3, rank: "Medium" },
        { value: "Samoa", label: "Samoa", weight: 3, rank: "Medium" },
        { value: "San Marino", label: "San Marino", weight: 1, rank: "Low" },
        { value: "Sao Tome and Principe", label: "Sao Tome and Principe", weight: 3, rank: "Medium" },
        { value: "Saudi Arabia", label: "Saudi Arabia", weight: 5, rank: "High" },
        { value: "Senegal", label: "Senegal", weight: 5, rank: "High" },
        { value: "Serbia", label: "Serbia", weight: 3, rank: "Medium" },
        { value: "Seychelles", label: "Seychelles", weight: 3, rank: "Medium" },
        { value: "Sierra Leone", label: "Sierra Leone", weight: 3, rank: "Medium" },
        { value: "Singapore", label: "Singapore", weight: 3, rank: "Medium" },
        { value: "Sint Maarten (Dutch part)", label: "Sint Maarten (Dutch part)", weight: 3, rank: "Medium" },
        { value: "Slovakia", label: "Slovakia", weight: 1, rank: "Low" },
        { value: "Slovenia", label: "Slovenia", weight: 1, rank: "Low" },
        { value: "Solomon Islands (the)", label: "Solomon Islands (the)", weight: 1, rank: "Low" },
        { value: "Somalia", label: "Somalia", weight: 5, rank: "High" },
        { value: "South Africa", label: "South Africa", weight: 1, rank: "Low" },
        { value: "South Georgia and the South Sandwich Islands", label: "South Georgia and the South Sandwich Islands", weight: 1, rank: "Low" },
        { value: "South Sudan", label: "South Sudan", weight: 5, rank: "High" },
        { value: "Spain", label: "Spain", weight: 1, rank: "Low" },
        { value: "Spratly Islands", label: "Spratly Islands", weight: 5, rank: "High" },
        { value: "Sri Lanka", label: "Sri Lanka", weight: 1, rank: "Low" },
        { value: "Sudan (the)", label: "Sudan (the)", weight: 5, rank: "High" },
        { value: "Suriname", label: "Suriname", weight: 1, rank: "Low" },
        { value: "Svalbard and Jan Mayen", label: "Svalbard and Jan Mayen", weight: 1, rank: "Low" },
        { value: "Swaziland", label: "Swaziland", weight: 1, rank: "Low" },
        { value: "Sweden", label: "Sweden", weight: 1, rank: "Low" },
        { value: "Switzerland", label: "Switzerland", weight: 3, rank: "Medium" },
        { value: "Syrian Arab Republic (the)", label: "Syrian Arab Republic (the)", weight: 5, rank: "High" },
        { value: "Taiwan (Province of China)", label: "Taiwan (Province of China)", weight: 1, rank: "Low" },
        { value: "Tajikistan", label: "Tajikistan", weight: 5, rank: "High" },
        { value: "Tanzania, United Republic of", label: "Tanzania, United Republic of", weight: 5, rank: "High" },
        { value: "Thailand", label: "Thailand", weight: 1, rank: "Low" },
        { value: "Timor-Leste", label: "Timor-Leste", weight: 3, rank: "Medium" },
        { value: "Togo", label: "Togo", weight: 3, rank: "Medium" },
        { value: "Tokelau", label: "Tokelau", weight: 1, rank: "Low" },
        { value: "Tonga", label: "Tonga", weight: 1, rank: "Low" },
        { value: "Trinidad and Tobago", label: "Trinidad and Tobago", weight: 1, rank: "Low" },
        { value: "Tunisia", label: "Tunisia", weight: 5, rank: "High" },
        { value: "Turkey", label: "Turkey", weight: 5, rank: "High" },
        { value: "Turkish Republic of Northern Cyprus (Northern Cyprus)", label: "Turkish Republic of Northern Cyprus (Northern Cyprus)", weight: 5, rank: "High" },
        { value: "Turkmenistan", label: "Turkmenistan", weight: 3, rank: "Medium" },
        { value: "Turks and Caicos Islands (the)", label: "Turks and Caicos Islands (the)", weight: 3, rank: "Medium" },
        { value: "Tuvalu", label: "Tuvalu", weight: 1, rank: "Low" },
        { value: "Uganda", label: "Uganda", weight: 5, rank: "High" },
        { value: "Ukraine", label: "Ukraine", weight: 5, rank: "High" },
        { value: "United Arab Emirates (the)", label: "United Arab Emirates (the)", weight: 5, rank: "High" },
        { value: "United Kingdom (the)", label: "United Kingdom (the)", weight: 1, rank: "Low" },
        { value: "United States (the)", label: "United States (the)", weight: 1, rank: "Low" },
        { value: "United States Minor Outlying Islands (the)", label: "United States Minor Outlying Islands (the)", weight: 1, rank: "Low" },
        { value: "Uruguay", label: "Uruguay", weight: 3, rank: "Medium" },
        { value: "Uzbekistan", label: "Uzbekistan", weight: 5, rank: "High" },
        { value: "Vanuatu", label: "Vanuatu", weight: 3, rank: "Medium" },
        { value: "Venezuela, Bolivarian Republic of", label: "Venezuela, Bolivarian Republic of", weight: 5, rank: "High" },
        { value: "Viet Nam", label: "Viet Nam", weight: 1, rank: "Low" },
        { value: "Virgin Islands (British)", label: "Virgin Islands (British)", weight: 5, rank: "High" },
        { value: "Virgin Islands (U.S.)", label: "Virgin Islands (U.S.)", weight: 5, rank: "High" },
        { value: "Wallis and Futuna", label: "Wallis and Futuna", weight: 1, rank: "Low" },
        { value: "Western Sahara", label: "Western Sahara", weight: 1, rank: "Low" },
        { value: "Yemen", label: "Yemen", weight: 5, rank: "High" },
        { value: "Zambia", label: "Zambia", weight: 1, rank: "Low" },
        { value: "Zimbabwe", label: "Zimbabwe", weight: 1, rank: "Low" }
    ];

    const sanctions = [
        {
            value: "Screened, PEP not identified, not on Sanctions lists",
            label: "Screened, PEP not identified, not on Sanctions lists",
            weight: 1,
            rank: "Minimal Risk"
        },
        {
            value: "Screened, PEP identified, not on Sanctions lists",
            label: "Screened, PEP identified, not on Sanctions lists",
            weight: 3,
            rank: "Medium"
        },
        {
            value: "Screened, PEP not identified, on Sanctions lists",
            label: "Screened, PEP not identified, on Sanctions lists",
            weight: 5,
            rank: "High"
        },
        {
            value: "Screened, PEP identified, on Sanctions lists",
            label: "Screened, PEP identified, on Sanctions lists",
            weight: 5,
            rank: "High"
        },
        {
            value: "Not Screened",
            label: "Not Screened",
            weight: 5,
            rank: "High"
        }
    ];

    const regulatory = [
        { value: "rbz", label: "RBZ" },
        { value: "potraz", label: "POTRAZ" },
        { value: "fiu", label: "FIU" },
    ]

    const loadIndustryOptions = (searchValue, callback) => {
        const filtered = industries.filter((industry) =>
            industry.value.toLowerCase().includes(searchValue.toLowerCase()));

        callback(filtered);
    }

    const loadOccupationsOptions = (searchValue, callback) => {
        const filtered = occupations.filter((industry) =>
            industry.value.toLowerCase().includes(searchValue.toLowerCase()));

        callback(filtered);
    }

    const loadCustomerTypesOptions = (searchValue, callback) => {
        const filtered = customerTypes.filter((industry) =>
            industry.value.toLowerCase().includes(searchValue.toLowerCase()));

        callback(filtered);
    }

    const loadCountriesOptions = (searchValue, callback) => {
        const filtered = countries.filter((industry) =>
            industry.value.toLowerCase().includes(searchValue.toLowerCase()));

        callback(filtered);
    }

    const loadSanctionsOptions = (searchValue, callback) => {
        const filtered = sanctions.filter((industry) =>
            industry.value.toLowerCase().includes(searchValue.toLowerCase()));

        callback(filtered);
    }

    const loadRegulatoriesOptions = (searchValue, callback) => {
        const filtered = regulatory.filter((industry) =>
            industry.value.toLowerCase().includes(searchValue.toLowerCase()));

        callback(filtered);
    }

    return (
        <div className={styles.container}>
            {/* === Risk Profiling Form === */}
            <form className={styles.form}>
                <h3>Risk Profiling Form</h3>
                <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                        <label htmlFor="industry">Industry</label>
                        <AsyncSelect
                            loadOptions={loadIndustryOptions}
                            className={styles.formInput}
                            styles={customStyles}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="occupation">Occupation</label>
                        <AsyncSelect
                            loadOptions={loadOccupationsOptions}
                            className={styles.formInput}
                            styles={customStyles}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="customerType">Customer Type</label>
                        <AsyncSelect
                            loadOptions={loadCustomerTypesOptions}
                            className={styles.formInput}
                            styles={customStyles}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="country">Country / Jurisdiction</label>
                        <AsyncSelect
                            loadOptions={loadCountriesOptions}
                            className={styles.formInput}
                            styles={customStyles}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="pepStatus">PEP / Sanction Status</label>
                        <AsyncSelect
                            loadOptions={loadSanctionsOptions}
                            className={styles.formInput}
                            styles={customStyles}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="regulatory">Regulatory / Adverse Media</label>
                        <AsyncSelect
                            loadOptions={loadRegulatoriesOptions}
                            className={styles.formInput}
                            styles={customStyles}
                        />
                    </div>
                </div>

                <div className={styles.formFooter}>
                    <button type="submit">Submit</button>
                </div>
            </form>

            {/* === Search Results === */}
            <div className={styles.results}>
                <div className={styles.resultsHeader}>
                    <h5>Search Results</h5>
                    <i>3 results found</i>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Name / Entity</th>
                            <th>Risk Rating</th>
                            <th>List Source</th>
                            <th>Match Confidence</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John Doe</td>
                            <td className={styles.highRisk}>High</td>
                            <td>OFAC SDN</td>
                            <td>98%</td>
                            <td className={styles.statusMatch}>Match Found</td>
                            <td>View</td>
                        </tr>
                        <tr>
                            <td>ABC Trading Ltd</td>
                            <td className={styles.mediumRisk}>Medium</td>
                            <td>UN Consolidated</td>
                            <td>85%</td>
                            <td className={styles.statusPotential}>Potential Match</td>
                            <td>View</td>
                        </tr>
                        <tr>
                            <td>Global Relief Org</td>
                            <td className={styles.lowRisk}>Low</td>
                            <td>EU Sanctions</td>
                            <td>100%</td>
                            <td className={styles.statusClear}>Clear</td>
                            <td>View</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
