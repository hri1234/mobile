import { useEffect } from 'react';
import Categories from '../Layouts/Categories';
import Banner from './Banner/Banner';
import DealSlider from './DealSlider/DealSlider';
import ProductSlider from './ProductSlider/ProductSlider';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getSliderProducts } from '../../actions/productAction';
import { useSnackbar } from 'notistack';
import MetaData from '../Layouts/MetaData';
import Megha from "../megha/Megha"
import Ankit from "../ankit/Ankit"
import Alibaba from "../ankit1/Alibaba"
import File from "../file/File"
import Akash from '../akash/Akash';

const Home = () => {

  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { error, loading } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors());
    }
    dispatch(getSliderProducts());
  }, [dispatch, error, enqueueSnackbar]);

  return (
    <>
      <MetaData title="Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!" />
      <Categories />
      <main className="flex flex-col gap-3 px-2 mt-16 sm:mt-2">
        <Banner />
        <DealSlider title={"Discounts for You"} />
        <Ankit />
        {!loading && <ProductSlider title={"Suggested for You"} tagline={"Based on Your Activity"} />}
        <Alibaba />
        <DealSlider title={"Top Brands, Best Price"} />
        <Ankit />
        {!loading && <ProductSlider title={"You May Also Like..."} tagline={"Based on Your Interest"} />}
        <File />
        <DealSlider title={"Top Offers On"} />
        <Ankit />
        {!loading && <ProductSlider title={"Don't Miss These!"} tagline={"Inspired by your order"} />}
        <DealSlider title={"Discounts for You"} />
        <File />
        {!loading && <ProductSlider title={"Suggested for You"} tagline={"Based on Your Activity"} />}
        <Megha />
        <DealSlider title={"Top Brands, Best Price"} />
        {!loading && <ProductSlider title={"You May Also Like..."} tagline={"Based on Your Interest"} />}
        <DealSlider title={"Top Offers On"} />
        <Ankit />
        {!loading && <ProductSlider title={"Don't Miss These!"} tagline={"Inspired by your order"} />}
        <DealSlider title={"Discounts for You"} />
      <Alibaba />
        {!loading && <ProductSlider title={"Suggested for You"} tagline={"Based on Your Activity"} />}
        <Megha />
        <DealSlider title={"Top Brands, Best Price"} />
        {!loading && <ProductSlider title={"You May Also Like..."} tagline={"Based on Your Interest"} />}
        <DealSlider title={"Top Offers On"} />
        <Ankit />
        {!loading && <ProductSlider title={"Don't Miss These!"} tagline={"Inspired by your order"} />}
        <DealSlider title={"Discounts for You"} />
        {!loading && <ProductSlider title={"Suggested for You"} tagline={"Based on Your Activity"} />}
        <Megha />
        <DealSlider title={"Top Brands, Best Price"} />
        {!loading && <ProductSlider title={"You May Also Like..."} tagline={"Based on Your Interest"} />}
        <DealSlider title={"Top Offers On"} />
        <Ankit />
        <Akash/>
        {!loading && <ProductSlider title={"Don't Miss These!"} tagline={"Inspired by your order"} />}
     
      </main>
    </>
  );
};

export default Home;
