import process from 'process';
import { configEnum } from '../common/optionsType';

const getCipheringConfig = () => {
    const args = process.argv.slice(2);
    const config = args.find 
}