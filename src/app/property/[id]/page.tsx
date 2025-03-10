// app/property/[id]/page.tsx

import { NextPage } from 'next';
import PropertyHeader from '../../../components/PropertyHeader';
import PropertyGallery from '../../../components/PropertyGallery';
import PropertyDetails from '../../../components/PropertyDetails';
import BookingSection from '../../../components/BookingSection';
import PropertyReviews from '../../../components/PropertyReviews';
import PropertyLocation from '../../../components/PropertyLocation';
import HostInfo from '../../../components/HostInfo';
import { samplePropertyDetails } from '../../../utils/staticData';
import { notFound } from 'next/navigation';

interface PropertyPageProps {
  params: { id: string }
}

const PropertyPage: NextPage<PropertyPageProps> = ({ params }) => {
  const { id } = params;

  // Find the property with the matching id
  const propertyDetails = samplePropertyDetails.find(property => property.id === id);

  // If no property is found, show 404 page
  if (!propertyDetails) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PropertyHeader property={propertyDetails} />
      <PropertyGallery images={propertyDetails.images} />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <PropertyDetails property={propertyDetails} />
          <PropertyReviews property={propertyDetails} />
          <PropertyLocation location={propertyDetails.location} />
        </div>
        <div className="md:col-span-1">
          <BookingSection property={propertyDetails} />
          <HostInfo host={propertyDetails.host} />
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;